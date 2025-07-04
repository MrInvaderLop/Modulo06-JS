import "./styles/Profile.css"

const Profile = ({ user }) => {
    return (
    <div className="profile-container">
        <h1>Información del perfil</h1>
        {user ? (
        <div className="profile-info">
            <p><strong>Nombre de usuario:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
        </div>
    ) : (
        <p>No hay información de usuario disponible.</p>
    )}
    </div>
    );
};

export default Profile;