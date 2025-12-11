import ProfileParagraph from "./ProfileParagraph";

function ProfileCard(profile) {
  return (
    <div className="card" style={{ width: "18rem", margin: "1rem" }}>
      <div className="card-body">
        <h5 className="card-title" style={{ marginTop: 0, color: "#333" }}>Profil użytkownika</h5>
        <ProfileParagraph label="Imię" title={profile.name} />
        <ProfileParagraph label="Email" title={profile.email} />
        <ProfileParagraph label="Telefon" title={profile.phone} />
        <ProfileParagraph label="Data urodzin" title={profile.birthDate} />
      </div>
    </div>
  );
}

export default ProfileCard;
