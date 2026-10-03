import { teamMembers } from "@/data/team";

function MemberCard({ member }) {
  return (
    <div className="flex gap-5 p-6 rounded-2xl border border-bluegrey-2 hover:border-blue-3 hover:shadow-md transition-all">
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
        <p className="text-sm text-grey-8 leading-relaxed">{member.bio}</p>
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
  );
}

export default function Team() {
  return (
    <div>
      <section className="py-20 px-6 bg-gradient-to-br from-blue-1 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-blue-10 mb-4">ToGather 소개</h1>
          <p className="text-grey-8 text-lg max-w-2xl mx-auto">
            교회와 성도가 하나가 되게 하고 싶었습니다. 교회 소식과 일정, 행사와 교인 정보가
            여러 곳에 흩어져 있으면 교회와 성도가 함께 움직이기 어렵습니다. ToGather는
            교회 운영을 한곳에 모아 모두가 같은 소식을 나누고 함께 참여할 수 있도록 돕습니다.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-blue-2 bg-blue-1 p-8">
            <h2 className="font-bold text-primary text-lg mb-3">투게더는 연결합니다</h2>
            <p className="text-sm text-blue-8 leading-relaxed">
              흩어진 교회 운영을 하나로 모아, 교회와 성도를 연결합니다.
            </p>
          </div>
          <div className="rounded-2xl border border-bluegrey-2 bg-bluegrey-1 p-8">
            <h2 className="font-bold text-blue-9 text-lg mb-3">투게더는 꿈꿉니다</h2>
            <p className="text-sm text-bluegrey-8 leading-relaxed">
              교회가 하나님 안에서 하나 되고, 성도들이 서로 연결되어 함께 세워지는 모습을 꿈꿉니다.
            </p>
          </div>
        </div>
      </section>

      {/* Team cards */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <MemberCard member={teamMembers[0]} />
            <div className="flex flex-col gap-6">
              <MemberCard member={teamMembers[1]} />
              <MemberCard member={teamMembers[2]} />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <MemberCard member={teamMembers[3]} />
            <MemberCard member={teamMembers[4]} />
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 px-6 bg-blue-1">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-blue-10 mb-3">협력 파트너</h2>
          <p className="text-grey-8 mb-8">
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
            "교회 운영을 하나로,<br />
            성도와 더 가까이"
          </p>
        </div>
      </section>
    </div>
  );
}
