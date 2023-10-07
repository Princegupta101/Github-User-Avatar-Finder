function UserGallary( {avatar,name}){
    return(
        <div className="relative">
            <div
             className="absolute p-1 left-0  bottom-8 bg-white  pl-4 pr-5 border-2 rounded-r-xl text-xl font-semibold">
                {name}</div>
            <img src={avatar}
             className='  h-80 border-1  border-black  rounded-2xl'  />
        </div>
    )
}
export default UserGallary;
