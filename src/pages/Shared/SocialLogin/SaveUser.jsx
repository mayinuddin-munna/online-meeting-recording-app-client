const SaveUser = (user) => {
    const currentUser = {
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        role: "user"
    };

    fetch("https://galaxy-meeting.onrender.com/add-users", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
    })
        .then((res) => res.json())
        .then((data) => console.log(data));
};

export default SaveUser;