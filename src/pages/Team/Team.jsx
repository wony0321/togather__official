import { teamMembers } from "@/data/team";
import yewonImage from "./예원.svg";
import eungyeolImage from "./은결.svg";

const imageOverrides = {
  "임예원": yewonImage,
  "정은결": eungyeolImage,
};

function MemberCard({ member }) {
  return (
    <div className="reveal-card flex flex-col items-center text-center gap-3 p-6 rounded-2xl border border-bluegrey-2 hover:border-blue-3 hover:shadow-md transition-all">
      {member.image ? (
        <img
          src={member.image}
          alt={member.name}
          className="w-24 h-24 rounded-full object-cover"
        />
      ) : (
        <div className="w-24 h-24 rounded-full bg-blue-2 flex items-center justify-center text-primary font-bold text-3xl">
          {member.name[0]}
        </div>
      )}
      <div>
        <h3 className="font-bold text-blue-9">{member.name}</h3>
        <p className="text-sm text-primary font-medium">{member.role}</p>
      </div>
      <ul className="space-y-1">
        {member.highlights.map((text) => (
          <li key={text} className="text-xs text-grey-8">
            {text}
          </li>
        ))}
      </ul>
      {member.email && (
        <a
          href={`mailto:${member.email}`}
          className="inline-block text-xs text-bluegrey-5 hover:text-primary transition-colors"
        >
          {member.email}
        </a>
      )}
    </div>
  );
}

export default function Team() {
  return (
    <section id="team" className="scroll-mt-16 bg-white">
      <div className="pt-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-blue-10 mb-4">ToGather 소개</h1>
          <p className="text-grey-8 text-lg max-w-3xl mx-auto">
            교회와 성도가 하나가 되게 하고 싶었습니다. <br/>
            교회 소식과 일정, 행사와 교인 정보가 여러 곳에 흩어져 있으면 교회와 성도가 함께 움직이기 어렵습니다. <br/>
            ToGather는 교회 운영을 한곳에 모아 모두가 같은 소식을 나누고 함께 참여할 수 있도록 돕고 싶습니다.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="reveal-card rounded-2xl py-8 px-4 bg-primary text-center">
            <h2 className="font-bold text-white text-2xl mb-3">투게더는 연결합니다</h2>
            <p className="text-base text-blue-1 leading-relaxed">
              흩어진 교회 운영을 하나로 모아, 교회와 성도를 연결합니다.
            </p>
          </div>
          <div className="reveal-card rounded-2xl py-8 px-4 bg-blue-9 text-center">
            <h2 className="font-bold text-white text-2xl mb-3">투게더는 꿈꿉니다</h2>
            <p className="text-base text-blue-2 leading-relaxed">
              교회가 하나님 안에서 하나 되고, 성도들이 서로 연결되어 함께 세워지는 모습을 꿈꿉니다.
            </p>
          </div>
        </div>
      </section>

      {/* Team cards */}
      <section className="pt-6 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {teamMembers.map((member) => (
              <MemberCard
                key={member.id}
                member={{ ...member, image: member.image || imageOverrides[member.name] || null }}
              />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
