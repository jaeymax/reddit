
const SidebarItem = ({name, icon}) => {
  return (
    <div className="flex gap-2 items-center py-3 px-5 hover:cursor-pointer rounded-lg hover:bg-blue-400" >
      {icon}
      <p>{name}</p>
    </div>
  )
}

export default SidebarItem;
