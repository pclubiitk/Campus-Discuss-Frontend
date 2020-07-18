// @flow
import * as React from "react";
import Screen from "../screen";
import MaximisedPost from "../../components/MaximisedPost";
import CommentsContainer from "../../components/CommentsContainer";

const ViewPost = () => {
  return (
    <>
      <MaximisedPost
        title="Some title"
        author="John Doe"
        content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam egestas accumsan justo et luctus. Phasellus eget pharetra ipsum. Donec pulvinar suscipit purus, sit amet porta orci efficitur eget. Nulla et tempor arcu. Nunc turpis risus, porta a egestas cursus, convallis sed massa. Nulla facilisi. Proin aliquet nibh at commodo sodales. Nulla eu felis sodales mauris sodales fringilla. Pellentesque vitae quam pellentesque, lacinia diam in, facilisis dui. Donec consectetur imperdiet sapien, id tempor sem lobortis a. Suspendisse non placerat mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus.\n\n

Donec aliquam quam quis felis dapibus facilisis. Donec maximus odio ut maximus posuere. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed non diam eu lacus placerat semper sed eget ante. Fusce aliquet viverra libero, ac sagittis magna rutrum non. Integer eu egestas velit. Pellentesque varius leo eu est viverra, eget dignissim lectus commodo. Sed sit amet ipsum maximus, accumsan erat vel, luctus mauris. Pellentesque id lectus nisl.`}
      />
      <CommentsContainer />
    </>
  );
};

const ViewPostScreen = () => {
  return <Screen title="Politics" renderMain={() => <ViewPost />} />;
};

export default ViewPostScreen;
