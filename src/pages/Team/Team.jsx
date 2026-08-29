import { teamMembers } from "@/data/team";

export default function Team() {
  return (
    <div>
      <section className="py-20 px-6 bg-gradient-to-br from-blue-1 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-blue-10 mb-4">팀 소개</h1>
          <p className="text-bluegrey-7 text-lg max-w-2xl mx-auto">
            SaaS 개발, UI/UX 디자인, AI 기능 기획, 마케팅, 사용자 리서치 역량을 갖춘
            팀이 ToGather를 만들어가고 있습니다.
          </p>
        </div>
      </section>

      {/* Team cards */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="flex gap-5 p-6 rounded-2xl border border-bluegrey-2 hover:border-blue-3 hover:shadow-md transition-all">
                <div className="shrink-0">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-blue-2 flex items-center justify-center text-primary font-bold text-xl">
                      {member.name[0]}
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="font-bold text-blue-9">{member.name}</h3>
                  <p className="text-sm text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-bluegrey-7 leading-relaxed">{member.bio}</p>
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="mt-2 inline-block text-xs text-bluegrey-5 hover:text-primary transition-colors"
                    >
                      {member.email}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 px-6 bg-blue-1">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-blue-10 mb-3">협력 파트너</h2>
          <p className="text-bluegrey-7 mb-8">
            ToGather는 콘텐츠·미디어 채널과 협력하여 서비스 확산 기반을 마련하고 있습니다.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {["GOODTV", "CBS"].map((partner) => (
              <div key={partner} className="px-8 py-4 bg-white rounded-xl border border-blue-2 font-semibold text-blue-8">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-6 bg-primary text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-4">우리의 미션</h2>
          <p className="text-pale text-lg leading-relaxed">
            "중·소규모 비영리단체, 교육기관, 커뮤니티 조직이<br />
            디지털 전환에 쉽게 적응할 수 있도록 돕는<br />
            All-in-One 운영·소통 플랫폼을 만든다"
          </p>
        </div>
      </section>
    </div>
  );
}
