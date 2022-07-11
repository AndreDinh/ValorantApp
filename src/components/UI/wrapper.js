import classes from './wrapper.module.css';
export default function (props){
    return (
        <div className={classes.cover}>
            {props.children}
        </div>
    )

}