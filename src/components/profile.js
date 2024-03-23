const Profile = () => {
    return (
        <section id="profile" className="profile">
            <h1 className="content-titles">ABOUT ME</h1>
            <div className="grid-wrapper">
                <div className="grid-content--image">
                    <img
                        className="fit-picture"
                        src="./media/img/topIcon.png"
                        alt="An Otter Icon" />
                </div>
                <div className="grid-content--title">Hayashi Tomoya</div>
                <div className="grid-content--title">
                    <p>
                        2001年12月21日生まれ。<br />
                        エンジニアを目指して勉強・就活中。<br />
                        好きな食べ物はカレーです。
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Profile;