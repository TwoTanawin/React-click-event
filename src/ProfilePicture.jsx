
function ProfilePicture(){
    const imageURL = "https://image.spreadshirtmedia.com/image-server/v1/compositions/T210A22PA4301PT17X41Y40D1050125938W25000H23950/views/1,width=550,height=550,appearanceId=22,backgroundColor=750033,noPt=true/baby-dont-hurt-me-funny-meme-mens-t-shirt.jpg"
    const handleClick = (e) => e.target.style.display = "none"
    return(
        <img onClick={(e) => handleClick(e)} src={imageURL}></img>
    );
}

export default ProfilePicture