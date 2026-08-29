import { useState } from "react";
import { pricingPlans } from "@/data/pricing";
import { inquiryApi } from "@/services/api";

const initialForm = {
  orgName: "",
  orgType: "",
  contactName: "",
  email: "",
  phone: "",
  memberCount: "",
  plan: "",
  message: "",
  privacy: false,
};

const orgTypes = ["교회", "비영리단체", "학원·교육기관", "커뮤니티 조직", "기타"];

const inputCls = "w-full px-4 py-2.5 border border-bluegrey-3 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary";
const selectCls = `${inputCls} bg-white`;

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.privacy) return;
    setStatus("submitting");
    try {
      await inquiryApi.submit(form);
      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
    }
  };

  return (
    <div>
      <section className="py-20 px-6 bg-gradient-to-br from-blue-1 to-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-blue-10 mb-4">도입 문의</h1>
            <p className="text-bluegrey-7 text-lg">
              아래 양식을 작성해 주시면 영업일 기준 1일 이내에 연락드립니다.
            </p>
          </div>

          {status === "success" ? (
            <div className="bg-blue-1 border border-blue-3 rounded-2xl p-10 text-center">
              <div className="text-4xl mb-4">✅</div>
              <h2 className="text-xl font-bold text-blue-8 mb-2">문의가 접수되었습니다!</h2>
              <p className="text-blue-6 text-sm">
                영업일 기준 1일 이내에 담당자가 연락드리겠습니다.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 px-6 py-2 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-blue-7 transition-colors"
              >
                새 문의 작성
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-bluegrey-2 p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-blue-9 mb-1.5">
                    조직명 <span className="text-red-400">*</span>
                  </label>
                  <input type="text" name="orgName" required value={form.orgName} onChange={handleChange}
                    placeholder="예) ○○교회, ○○학원" className={inputCls} />
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-9 mb-1.5">
                    조직 유형 <span className="text-red-400">*</span>
                  </label>
                  <select name="orgType" required value={form.orgType} onChange={handleChange} className={selectCls}>
                    <option value="">선택해주세요</option>
                    {orgTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-9 mb-1.5">
                    담당자 이름 <span className="text-red-400">*</span>
                  </label>
                  <input type="text" name="contactName" required value={form.contactName} onChange={handleChange} className={inputCls} />
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-9 mb-1.5">
                    이메일 <span className="text-red-400">*</span>
                  </label>
                  <input type="email" name="email" required value={form.email} onChange={handleChange} className={inputCls} />
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-9 mb-1.5">연락처</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                    placeholder="010-0000-0000" className={inputCls} />
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-9 mb-1.5">구성원 수</label>
                  <select name="memberCount" value={form.memberCount} onChange={handleChange} className={selectCls}>
                    <option value="">선택해주세요</option>
                    <option value="~50">50명 이하</option>
                    <option value="51~100">51~100명</option>
                    <option value="101~300">101~300명</option>
                    <option value="301~">300명 이상</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-9 mb-2">관심 요금제</label>
                <div className="flex flex-wrap gap-3">
                  {[...pricingPlans.map((p) => p.name), "맞춤형 요금제"].map((plan) => (
                    <label key={plan} className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="plan" value={plan} checked={form.plan === plan}
                        onChange={handleChange} className="accent-primary" />
                      <span className="text-sm text-blue-8">{plan}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-9 mb-1.5">문의 내용</label>
                <textarea name="message" rows={4} value={form.message} onChange={handleChange}
                  placeholder="궁금한 점이나 요청 사항을 자유롭게 작성해 주세요."
                  className={`${inputCls} resize-none`} />
              </div>

              <div className="flex items-start gap-2">
                <input type="checkbox" name="privacy" id="privacy" checked={form.privacy}
                  onChange={handleChange} className="mt-0.5 accent-primary" required />
                <label htmlFor="privacy" className="text-sm text-bluegrey-7 cursor-pointer">
                  <span className="text-red-400">*</span> 개인정보 수집 및 이용에 동의합니다.
                  수집된 정보는 문의 처리 목적으로만 사용됩니다.
                </label>
              </div>

              {status === "error" && (
                <p className="text-sm text-red-600 bg-red-50 rounded-xl px-4 py-3">
                  문의 접수 중 오류가 발생했습니다. 다시 시도해 주세요.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "submitting" || !form.privacy}
                className="w-full py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-blue-7 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? "접수 중..." : "문의 접수하기"}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
