import PropTypes from 'prop-types';
import Button from './Button';

const Header = (props) => {

    const thisClick = () => {
        console.log('click')
    }

    return (
        <header className="header">
            <h1>{props.title}</h1>
            <Button color="green" text="Add" btnClick={thisClick}></Button>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header
 