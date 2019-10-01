import useWindowEvent from './useWindowEvent.js';

const mouseMove = (callback) => {
    return useWindowEvent("mousemove", callback);
};

export default mouseMove;