import { event } from "jquery";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import './sideNavWithRoutingWidget.scss';

function SideNavWithRoutingWidget(props) {
    console.log('data----', props)
    const [leftMenuItems, setLeftmenuItems] = useState(props.menuData);
    const [currIndex, setCurrIndex] = useState(0);
    let count;

    const navigate = useNavigate();

    function routingData(index, url,title) {
        count = index;
        setCurrIndex(index);
        // navigate(url);
        props.currentIndex(index)
        
    }

    useEffect(() => {
        if (count > 0) {
            setCurrIndex(count);
        }
        setLeftmenuItems(leftMenuItems);
    }, [currIndex]);


    return (
        <section className="sideNavWidgetContainer">
            <ul className="" style={{ marginLeft: "20px" }}>
                {
                    leftMenuItems.map((data, index) => {
                        return (
                            <li className={currIndex == index ? "active" : "non-active"} key={data.id} onClick={() => routingData(index, data.url,data.title)}>
                                {data.title}
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}



export default SideNavWithRoutingWidget;