const Mapper = (props) => {
    return ( 
        <div>
            {
                props.list.map((detail,index)=>{
                    const Tag=props.tag;
                    return (
                        <Tag className={props.style}><a href={detail.link}>{detail.name}</a></Tag>
                    )
                })
            }
        </div>
     );
}
 
export default Mapper;