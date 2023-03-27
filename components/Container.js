import Navigation from "/.navigation";

const Container = (props) => {
  <div>
    <Navigation />
    <div>
        {props.children}
    </div>
  </div>;
};

export default Container;