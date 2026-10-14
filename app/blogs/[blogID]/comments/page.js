export default async function commentId(props)
{
        const paramsobj = await props.params;
        const {blogID} = paramsobj;
        console.log(paramsobj);

    return (
        <div>

            All Comments {blogID}
            
        </div>
    )
}