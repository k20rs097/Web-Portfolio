import mySkills from '../json/mySkills.json';

const skillData = mySkills.data;

const SkillSheet = () => {
    return (
      <div id="skills" className="wrapper">
        <SkillCard
          lang={skillData.html}
        />
        <SkillCard
          lang={skillData.css}
        />
        <SkillCard
          lang={skillData.javaScript}
        />
        <SkillCard
          lang={skillData.python}
        />
        <SkillCard
          lang={skillData.swift}
        />
        <SkillCard
          lang={skillData.kotlin}
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
      <div className="card">
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