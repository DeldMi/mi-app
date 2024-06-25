import React, { useRef, useEffect, useState } from 'react';
import style from './Container.module.css';

const Container = ({ children, heightViews }) => {
    const containerRef = useRef(null);
    const [isOverflow, setIsOverflow] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (containerRef.current) {
                const { scrollHeight } = containerRef.current;
                const availableHeight = window.innerHeight - (heightViews != null ? heightViews : 116);
                setIsOverflow(scrollHeight > availableHeight);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [heightViews]);

    const heightView = window.innerHeight - (heightViews != null ? heightViews : 116);


    return (
        <div
            className={style.container}
            ref={containerRef}
            style={{ height: isOverflow ? `auto` : `${heightView}px` }}
        >
            {children}
        </div>
    );
}

export default Container;
