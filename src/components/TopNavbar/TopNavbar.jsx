import React, { memo } from 'react';
import { ReactComponent as MenuRight } from 'assets/images/menu-right.svg';
import classes from './TopNavbar.module.scss';
import IconBox from "components/IconBox/IconBox";
import { ReactComponent as ArrowLeft} from 'assets/images/arrow-left.svg';
import { ReactComponent as Heart} from 'assets/images/heart.svg';
import { ReactComponent as Dots } from 'assets/images/v-dots.svg';
import { useNavigate } from 'react-router-dom';

const TopNavbar = (props) => {
    const navigate = useNavigate();
    const navigateBack = () => {
        navigate(-1)
    } 
    return (
        <div className={classes.top_navbar}>
            {props.isNavButton ? <MenuRight /> : ''}
            {props.isBackButton 
                ? <IconBox clickEvent={navigateBack}>
                    <ArrowLeft />
                  </IconBox> 
                : ''}
            {props.pageTitle ? 
                <span className={classes.page_title}>
                    { props.pageTitle }
                </span> : ''}
            {props.isFavoriteButton ? 
                <IconBox>
                    <Heart className="add-to-favorites" />
                </IconBox> 
                : ''}
            {props.isMoreButton ?
                <IconBox>
                    <Dots className={classes.more_attributes} />
                </IconBox> 
                : ''}
        </div>
    );
};

export default memo(TopNavbar);