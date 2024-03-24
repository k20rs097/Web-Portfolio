import mySkills from '../json/mySkills.json';

const skillData = mySkills.data;

const SkillSheet = () => {
    return (
      <div className="skill-sheet">
        <SkillCard
          lang={skillData.html}
          type="skill-card--large"
        />
        <SkillCard
          lang={skillData.css}
          type="skill-card--regular"
        />
        <SkillCard
          lang={skillData.javaScript}
          type="skill-card--regular"
        />
        <SkillCard
          lang={skillData.python}
          type="skill-card--regular"
        />
        <SkillCard
          lang={skillData.swift}
          type="skill-card--regular"
        />
        <SkillCard
          lang={skillData.kotlin}
          type="skill-card--regular"
        />
      </div>
    );
}

const SkillCard = ({ lang, type }) => {
    const solidStars = Array(lang.skillLevel).fill().map((_, index) => (
      <i key={`solid-star-${index}`} className="fa-solid fa-star"></i>
    ));

    const regularStars = Array(5 - lang.skillLevel).fill().map((_, index) => (
      <i key={`regular-star-${index}`} className="fa-regular fa-star"></i>
    ));

    return (
      <div className="skill-card--regular">
        <div className="skill-info">
          <h1 className="language">{lang.language}</h1>
          <p className="about">{lang.about}</p>
          <div className="skill-level">
            {solidStars}
            {regularStars}
          </div>
        </div>
      </div>
    );
}

export default SkillSheet;