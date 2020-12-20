
import Card from "./Card";

function Content(props) {

    return (
        <div className="content">
            {props.database.map((item, index)=>{
                return <Card
                        database={props.database}
                        product={item}
                        handleAdd={props.handleAdd}
                        key={index}
                      />
            })
            }

        </div>
    );
}

export default Content;