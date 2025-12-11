function ProfileParagraph({ label, title }) {
    return (
        <div className="mb-3">
            <strong>{label}:</strong>
            <p>{title}</p>
        </div>
    );
}

export default ProfileParagraph;
