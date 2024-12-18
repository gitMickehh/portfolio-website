const writingSamples = [
  {
    emoji: "🍌",
    link: "https://mickehh.itch.io/an-appealing-story",
    title: "An Appealing Story",
    description: "Branching Story With 7 Different Endings",
  },
  {
    emoji: "🏰",
    link: "https://drive.google.com/file/d/1tkIlkaLXzrdGIiBaBCwGdW5GhObiFbsj/view?usp=sharing",
    title: "Unusual Visitors",
    description: "Side Quest dialogue samples",
  },
  {
    emoji: "🛗",
    link: "https://drive.google.com/file/d/1UhHQ2SpO0450iR3iaaZeD2-E2rG1hx4d/view?usp=sharing",
    title: "What if Mirage, Madeline & Bigby met in an elevator?",
    description:
      "A cutscene screenplay that includes three characters from different IPs",
  },
  {
    emoji: "💌",
    link: "https://mickehh.itch.io/i-love-you-but",
    title: "I Love you, but..",
    description: "A Branching IF game made with Ink",
  },
  {
    emoji: "🐺",
    link: "https://mickehh.itch.io/lrrh-side-quest",
    title: "Little Red Riding Hood",
    description: "A side quest set within the fairy tale made in Twine",
  },
];

const allGames = [
  {
    title: "Then and Now",
    iconLocation: "thenandnow-icon.webp",
    coverphoto: "thenandnow.gif",
    url: "https://mickehh.itch.io/then-and-now",
    tagline:
      "'You' is stuck in a 60 second time loop, figure out what's out and get them out!",
    engine: "Unity",
    platform: ["PC", "Web"],
    role: ["Programmer", "Designer", "Writer", "Narrative Designer"],
    genre: ["Adventure", "Top-Down"],
  },
  {
    title: "I Love You, But..",
    iconLocation: "",
    emoji: "💌",
    coverphoto: "ILYB-GIF4.gif",
    url: "https://mickehh.itch.io/i-love-you-but",
    tagline:
      "Write a letter to someone that you've been avoiding talking real with.",
    engine: "Unity",
    platform: ["PC", "Web", "Android"],
    role: ["Programmer", "Designer", "Writer", "Narrative Designer"],
    genre: ["Interactive Fiction", "Visual Novel"],
  },
  {
    title: "An Appealing Story",
    iconLocation: "",
    emoji: "🍌",
    coverphoto: "bananascreen1.webp",
    url: "https://mickehh.itch.io/an-appealing-story",
    tagline:
      "What happens when you're faced with a decision whether to pick up a banana peel off the ground or to leave it there. TIME TRAVEL!",
    engine: "Unity",
    platform: ["PC", "Web"],
    role: ["Programmer", "Designer", "Writer", "Narrative Designer"],
    genre: ["Interactive Fiction", "Visual Novel"],
  },
  {
    title: "Dear Mayor,",
    iconLocation: "",
    emoji: "📫",
    coverphoto: "dearmayor.gif",
    url: "https://mickehh.itch.io/dear-mayor",
    tagline:
      "You're the mayor! Approve, deny, or ignore incoming letters from the people, government, superheroes, aliens, everything!",
    engine: "Unity",
    platform: ["PC"],
    role: ["Programmer", "Designer", "Writer", "Narrative Designer"],
    genre: ["Interactive Fiction", "Visual Novel"],
  },
  {
    title: "One Last Meal",
    iconLocation: "onelastmeal-icon.webp",
    emoji: "💀",
    coverphoto: "onelastmeal.webp",
    url: "https://makkurataichou.itch.io/one-last-meal",
    tagline:
      "As the angel of death, give the visitors one last meal and have a sweet conversation with them.",
    engine: "Ren'Py",
    platform: ["PC", "Mac"],
    role: ["Programmer", "Writer", "Background Artist"],
    genre: ["Visual Novel"],
  },
  {
    title: "Rigid Bond",
    iconLocation: "rigidbond-icon.webp",
    emoji: "♟️",
    coverphoto: "rigidbond.gif",
    url: "https://mickehh.itch.io/rigid-bond",
    tagline: "A relaxing 3D puzzle game with a subtle (textless) story",
    engine: "Unity",
    platform: ["Android", "Web"],
    role: ["Programmer", "Designer", "Level Designer"],
    genre: ["Puzzle", "3D Puzzle"],
  },
  {
    title: "Shrines of The Gods",
    iconLocation: "shrinesOfThegods.webp",
    emoji: "⛪",
    coverphoto: "shrinesOfThegods-gameplay.webp",
    url: "https://mickehh.itch.io/shrines-of-the-gods",
    tagline:
      "A procedurally generated survival game where four Egyptian gods rule the world. Find out what gives them power through your offerings.",
    engine: "Unity",
    platform: ["PC", "Web"],
    role: [
      "Programmer",
      "Designer",
      "Level Designer",
      "Narrative Designer",
      "Writer",
      "Artist",
    ],
    genre: ["Top-Down", "Survival"],
  },
];

const skills = [
  {
    skill: "game design",
    level: "advanced",
    color: "#DDFF00AA",
  },
  {
    skill: "prototyping",
    level: "advanced",
    color: "#AA6600AA",
  },
  {
    skill: "C#",
    level: "advanced",
    color: "#660077AA",
  },
  {
    skill: "unity",
    level: "advanced",
    color: "#CCCCCCAA",
  },
  {
    skill: "godot",
    level: "intermediate",
    color: "#478CBFAA",
  },
  {
    skill: "unreal engine",
    level: "intermediate",
    color: "#06A8A8AA",
  },
  {
    skill: "writing",
    level: "intermediate",
    color: "#FF8800AA",
  },
  {
    skill: "react",
    level: "beginner",
    color: "#0088FFAA",
  },
];

const genreTagColors = [
  {
    name: "Interactive Fiction",
    color: "#605030AA",
  },
  {
    name: "Visual Novel",
    color: "#736242AA",
  },
  {
    name: "Puzzle",
    color: "#38AE30AA",
  },
  {
    name: "3D Puzzle",
    color: "#38BE30AA",
  },
  {
    name: "Top-Down",
    color: "#6599AEAA",
  },
  {
    name: "Survival",
    color: "#892143AA",
  },
  {
    name: "Adventure",
    color: "#892603AA",
  },
];

const roleTagColors = [
  {
    name: "Programmer",
    color: "#112299AA",
  },
  {
    name: "Designer",
    color: "#11AA22AA",
  },
  {
    name: "Writer",
    color: "#77BB33AA",
  },
  {
    name: "Level Designer",
    color: "#662288AA",
  },
  {
    name: "Background Artist",
    color: "#6599AEAA",
  },
  {
    name: "Narrative Designer",
    color: "#892143AA",
  },
];

const platformTagColors = [
  {
    name: "PC",
    color: "#65EEAEAA",
  },
  {
    name: "Mac",
    color: "#3366AAAA",
  },
  {
    name: "Android",
    color: "#33BB33AA",
  },
  {
    name: "Web",
    color: "#3300AAAA",
  },
];

export default function App() {
  function handleClickResume() {
    window.open(
      "https://drive.google.com/file/d/193gZ9RgPFBBNMaDVOY3Hi29aslR-ybrw/view?usp=sharing",
      "_blank"
    );
  }

  function handleClickContact() {
    window.open("mailto:p.nader.ma+website@gmail.com");
  }

  function handleClickBookMeeting() {
    window.open("https://calendly.com/p-nader-ma/45min", "_blank");
  }

  return (
    <div className="App">
      <div className="motherbox">
        <Avatar />
        <Title />
        <SkillList />
        <Description />
        <QuickAccess>
          {/* <Button>About</Button> */}
          <Button onClick={handleClickResume}>Resume</Button>
          <Button onClick={handleClickContact}>Contact</Button>
          <Button onClick={handleClickBookMeeting}>Book A Meeting</Button>
        </QuickAccess>
        <WritingSamplesLinks />
        <Games games={allGames} />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="pictures/nader.jpg" alt="nader" />;
}

function Title() {
  return (
    <>
      <h2>Nader Youssef</h2>
      <div className="titles">
        <h3>System Designer</h3>
        <div className="side-titles">
          <p>Narrative Designer</p>
          <p>Technical Designer</p>
          <p>Game Writer</p>
        </div>
      </div>
    </>
  );
}

function Description() {
  return (
    <p className="introCard">
      With 6+ years of being a game programmer and designer on indie teams in
      Egypt, I moved to San Francisco, CA to get closer to this side of the
      industry! I designed and developed 15+ games for PC, Mobile & Web in
      Unity, C#, Godot & Unreal Engine. My experience in leading teams, wearing
      multiple hats and organizing larger projects have helped me be a good
      point of convergence for my teammates! I have always loved telling stories
      and game design, becoming a narrative designer has always been my
      destination!
    </p>
  );
}

function QuickAccess({ children }) {
  return (
    <>
      <div className="quick-access">{children}</div>
      {/* <p>p.nader.ma@gmail.com</p> */}
    </>
  );
}

function Button({ onClick, children }) {
  return (
    <button className="btn" onClick={onClick}>
      {children}
    </button>
  );
}

function WritingSamplesLinks() {
  return (
    <div>
      <h3>Writing Samples</h3>
      <ul className="writing-samples-list">
        {writingSamples.map((writingSample) => (
          <WritingSampleLink
            writingSample={writingSample}
            key={writingSample.title}
          />
        ))}
      </ul>
    </div>
  );
}

function WritingSampleLink({ writingSample }) {
  return (
    <li
      className="writing-sample"
      onClick={() => window.open(writingSample.link, "_blank")}
    >
      <span>{writingSample.emoji}</span>
      <span>
        <b>{writingSample.title}</b>
      </span>
      <p>{writingSample.description}</p>
    </li>
  );
}

function Games({ games }) {
  return (
    <>
      <h3>Games</h3>
      <div className="games">
        {games.map((game) => (
          <Game game={game} key={game.title} />
        ))}
      </div>
    </>
  );
}

function Game({ game }) {
  return (
    <div className="game">
      <div className="game-header">
        {game.iconLocation ? (
          <img
            src={`/pictures/${game.iconLocation}`}
            alt={`${game.title}-icon`}
            style={{ width: `24px` }}
          />
        ) : (
          <span>{game.emoji}</span>
        )}
        {game.title}
      </div>
      <div className="game-thumbnail-container">
        <img
          src={`/pictures/${game.coverphoto}`}
          alt={game.title}
          style={{ width: `400px` }}
        />
      </div>
      <TagList list={game.genre} colorLookup={genreTagColors}></TagList>
      <TagList list={game.role} colorLookup={roleTagColors}>
        Role
      </TagList>
      <TagList list={game.platform} colorLookup={platformTagColors}></TagList>
      <p className="game-tagline">{game.tagline}</p>
      <Link>{game.url}</Link>
    </div>
  );
}

function TagList({ list, colorLookup, children }) {
  function lookUpColor(genre) {
    const color = colorLookup?.filter((tagColor) => tagColor.name === genre)[0]
      ?.color;
    return color;
  }

  return (
    <div className="tag-list">
      {children && <span>{children}</span>}
      {list.map((genre) => (
        <Tag tagName={genre} color={lookUpColor(genre)} key={genre} />
      ))}
    </div>
  );
}

function Tag({ tagName, color }) {
  const style = { backgroundColor: color };

  return (
    <p className="tag" style={style}>
      {tagName}
    </p>
  );
}

function Link({ color = "#444444", maxCharacters = 35, children }) {
  const displayString =
    children.slice(8, maxCharacters) +
    `${maxCharacters < children.length ? "..." : ""}`;
  return (
    <p
      className="link"
      onClick={() => {
        window.open(children, "_blank");
      }}
    >
      {displayString}
    </p>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill
          bgColor={skill.color}
          skillName={skill.skill}
          skillLevel={skill.level}
          key={skill.color + skill.skill}
        />
      ))}
    </div>
  );
}

function Skill({ bgColor, skillName, skillLevel }) {
  const color = bgColor ? bgColor : "grey";
  const style = { backgroundColor: color };
  const emoji =
    skillLevel === "advanced"
      ? "💪"
      : skillLevel === "intermediate"
      ? "👍🏼"
      : "👶🏼";
  return (
    <p className="skill" style={style}>
      {skillName} {emoji}
    </p>
  );
}
