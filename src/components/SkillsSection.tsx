import SkillsSlideshow from "./SkillsSlideshow";

const SkillsSection = () => {
  return (
    <section className="py-16 px-8 bg-white" id="skills">
      <h2 className="text-3xl font-bold text-center mb-12 text-primary">Skills & Technologies</h2>
      <SkillsSlideshow />
    </section>
  );
};

export default SkillsSection;