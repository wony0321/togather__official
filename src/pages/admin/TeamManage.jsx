import { useState } from "react";
import { teamMembers as initialTeam } from "@/data/team";
import { teamApi } from "@/services/api";

export default function TeamManage() {
  const [members, setMembers] = useState(initialTeam);
  const [editing, setEditing] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", role: "", bio: "", email: "" });

  const openEdit = (member) => {
    setEditing(member.id);
    setForm({ name: member.name, role: member.role, bio: member.bio, email: member.email });
    setShowForm(true);
  };

  const openNew = () => {
    setEditing(null);
    setForm({ name: "", role: "", bio: "", email: "" });
    setShowForm(true);
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      if (editing) {
        await teamApi.update(editing, form);
        setMembers((prev) => prev.map((m) => (m.id === editing ? { ...m, ...form } : m)));
      } else {
        const { data } = await teamApi.create(form);
        setMembers((prev) => [...prev, { id: data.id, ...form }]);
      }
      setShowForm(false);
    } catch {
      if (editing) {
        setMembers((prev) => prev.map((m) => (m.id === editing ? { ...m, ...form } : m)));
      } else {
        setMembers((prev) => [...prev, { id: Date.now(), ...form }]);
      }
      setShowForm(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("정말 삭제하시겠습니까?")) return;
    try {
      await teamApi.delete(id);
    } catch {
      // ignore
    }
    setMembers((prev) => prev.filter((m) => m.id !== id));
  };

  const inputCls = "w-full px-4 py-2.5 border border-bluegrey-3 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary";

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-blue-10">팀원 관리</h1>
          <p className="text-grey-8 text-sm mt-1">총 {members.length}명</p>
        </div>
        <button
          onClick={openNew}
          className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-blue-7 transition-colors"
        >
          + 팀원 추가
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {members.map((member) => (
          <div key={member.id} className="bg-white rounded-2xl border border-bluegrey-2 p-6">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-2 flex items-center justify-center text-primary font-bold">
                  {member.name[0]}
                </div>
                <div>
                  <h3 className="font-bold text-blue-9">{member.name}</h3>
                  <p className="text-sm text-primary">{member.role}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => openEdit(member)}
                  className="px-3 py-1 text-xs text-grey-8 border border-bluegrey-3 rounded-lg hover:bg-bluegrey-1"
                >
                  편집
                </button>
                <button
                  onClick={() => handleDelete(member.id)}
                  className="px-3 py-1 text-xs text-red-600 border border-red-200 rounded-lg hover:bg-red-50"
                >
                  삭제
                </button>
              </div>
            </div>
            <p className="text-sm text-grey-8 leading-relaxed">{member.bio}</p>
            {member.email && (
              <p className="text-xs text-bluegrey-5 mt-2">{member.email}</p>
            )}
          </div>
        ))}
      </div>

      {/* Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-xl">
            <h2 className="text-lg font-bold text-blue-10 mb-6">
              {editing ? "팀원 정보 편집" : "팀원 추가"}
            </h2>
            <form onSubmit={handleSave} className="space-y-4">
              {[
                { name: "name", label: "이름", required: true },
                { name: "role", label: "직책·역할", required: true },
                { name: "email", label: "이메일" },
              ].map(({ name, label, required }) => (
                <div key={name}>
                  <label className="block text-sm font-medium text-blue-9 mb-1">
                    {label} {required && <span className="text-red-400">*</span>}
                  </label>
                  <input type="text" name={name} required={required}
                    value={form[name]} onChange={handleChange} className={inputCls} />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium text-blue-9 mb-1">소개</label>
                <textarea name="bio" rows={3} value={form.bio} onChange={handleChange}
                  className={`${inputCls} resize-none`} />
              </div>
              <div className="flex gap-3 pt-2">
                <button type="button" onClick={() => setShowForm(false)}
                  className="flex-1 py-2.5 border border-bluegrey-3 rounded-xl text-sm font-medium text-bluegrey-8 hover:bg-bluegrey-1">
                  취소
                </button>
                <button type="submit"
                  className="flex-1 py-2.5 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-blue-7 transition-colors">
                  저장
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
