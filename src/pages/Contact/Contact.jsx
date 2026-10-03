import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { pricingPlans } from "@/data/pricing";
import { inquiryApi } from "@/services/api";

const initialForm = {
  orgName: "",
  region: "",
  denomination: "",
  memberCount: "",
  contactName: "",
  position: "",
  phone: "",
  email: "",
  plan: "",
  message: "",
  currentWebsite: "",
  currentManagementMethod: "",
  inquiryType: "",
  privacy: false,
};

const managementMethods = ["엑셀/종이", "다른 교적 프로그램", "따로 쓰는 게 없어요"];
const inquiryTypes = ["상담 신청", "가격·요금 문의", "데모 요청", "기타"];

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
            <p className="text-grey-8 text-lg">
              교회 상황과 필요한 기능을 알려주시면, 최대한 빠르게 연락드리겠습니다.
            </p>
          </div>

          {status === "success" ? (
            <div className="bg-blue-1 border border-blue-3 rounded-2xl p-10 text-center">
              <CheckCircle2 className="w-12 h-12 text-primary mb-4 mx-auto" strokeWidth={1.75} />
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
                    교회명 <span className="text-red-400">*</span>
                  </label>
                  <input type="text" name="orgName" required value={form.orgName} onChange={handleChange}
                    placeholder="예) ○○교회" className={inputCls} />
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-9 mb-1.5">
                    지역 <span className="text-red-400">*</span>
                  </label>
                  <input type="text" name="region" required value={form.region} onChange={handleChange}
                    placeholder="예) 서울 강남구" className={inputCls} />
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-9 mb-1.5">교단 (선택)</label>
                  <input type="text" name="denomination" value={form.denomination} onChange={handleChange} className={inputCls} />
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-9 mb-1.5">교인 수</label>
                  <select name="memberCount" value={form.memberCount} onChange={handleChange} className={selectCls}>
                    <option value="">선택해주세요</option>
                    <option value="~50">50명 이하</option>
                    <option value="51~100">51~100명</option>
                    <option value="101~300">101~300명</option>
                    <option value="301~">300명 이상</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-9 mb-1.5">
                    담당자 성함 <span className="text-red-400">*</span>
                  </label>
                  <input type="text" name="contactName" required value={form.contactName} onChange={handleChange} className={inputCls} />
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-9 mb-1.5">직분 또는 맡은 일 (선택)</label>
                  <input type="text" name="position" value={form.position} onChange={handleChange}
                    placeholder="예) 담임목사, 사무간사" className={inputCls} />
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-9 mb-1.5">연락처</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                    placeholder="010-0000-0000" className={inputCls} />
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-9 mb-1.5">
                    이메일 <span className="text-red-400">*</span>
                  </label>
                  <input type="email" name="email" required value={form.email} onChange={handleChange} className={inputCls} />
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-blue-9 mb-1.5">현재 교회 홈페이지 주소 (선택)</label>
                  <input type="text" name="currentWebsite" value={form.currentWebsite} onChange={handleChange}
                    placeholder="https://" className={inputCls} />
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-9 mb-1.5">현재 사용 중인 교인 관리 방법 (선택)</label>
                  <select name="currentManagementMethod" value={form.currentManagementMethod} onChange={handleChange} className={selectCls}>
                    <option value="">선택해주세요</option>
                    {managementMethods.map((m) => <option key={m} value={m}>{m}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-9 mb-2">문의하실 내용 선택</label>
                <div className="flex flex-wrap gap-3">
                  {inquiryTypes.map((type) => (
                    <label key={type} className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="inquiryType" value={type} checked={form.inquiryType === type}
                        onChange={handleChange} className="accent-primary" />
                      <span className="text-sm text-blue-8">{type}</span>
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
                <label htmlFor="privacy" className="text-sm text-grey-8 cursor-pointer">
                  <span className="text-red-400">*</span> [필수] 도입 상담을 위한 개인정보 수집 및 이용에 동의합니다.
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
