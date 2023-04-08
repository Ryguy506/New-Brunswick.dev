import React from "react";
import "./index.css"

const Comment = ({commentData}) => {

    return (
        <div id="commentContainer" className="columns m-3">
            <div id="commentUser" className="column is-2">
                <img src="https://www.pngkey.com/png/full/73-730477_first-name-profile-image-placeholder-png.png"/>
                <p>{commentData.username}</p>

            </div>

            <div id="commentContent" className="column is-10">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et ex id nulla mollis rhoncus. Nam venenatis bibendum risus nec elementum. Phasellus sodales quis erat ac cursus. In et auctor risus. Quisque varius, felis quis mollis malesuada, elit diam interdum eros, in consectetur risus nisl nec eros. Nullam bibendum porta ipsum in dapibus. Donec ut urna congue, eleifend risus id, fringilla risus.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et ex id nulla mollis rhoncus. Nam venenatis bibendum risus nec elementum. Phasellus sodales quis erat ac cursus. In et auctor risus. Quisque varius, felis quis mollis malesuada, elit diam interdum eros, in consectetur risus nisl nec eros. Nullam bibendum porta ipsum in dapibus. Donec ut urna congue, eleifend risus id, fringilla risus.
                </p>

            </div>
          </div>


    );
}

export default Comment;