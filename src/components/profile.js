import profileImage from "../media/img/topIcon.png";
import myProfile from "../json/myProfile.json";

const profileData = myProfile.data.profile;


const Profile = () => {
    return (
        <section id="profile" className="profile">
            <h1 className="content-titles">ABOUT ME</h1>
            <div className="grid-wrapper">
                <div className="grid-content--image">
                    <img
                        className="profile-icon"
                        src={profileImage}
                        alt="An Otter Icon" />
                </div>
                <div className="grid-content--title">{profileData.name}</div>
                <div className="grid-content--title">
                    <p>{profileData.introduction}</p>
                </div>
            </div>
        </section>
    );
}

export default Profile;