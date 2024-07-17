import React from "react";
import { ChatItem } from "./ChatItem";
import botIcon from "./bot.png";
import humanIcon from "./humanface.png";
import { Comment } from "react-loader-spinner";

export class ChatAssistant extends React.Component<any,any> {
  
    render() {
        

         let className: string = this.props.className;
         let imageIcon: string = this.props.imageIcon;
         let imageAlt:string= this.props.imageAlt;
         let isProcessing:boolean= this.props.isProcessing;
        let content:string=this.props.content;
        return(
            <div
                className={className}
            >
              {!isProcessing &&  <span
                    className="fbot-bubble-src"
                >
                  <img
                        src={imageIcon}
                        alt={imageAlt} className="user-img"
                    ></img>
                    
                </span>
    }
             {isProcessing &&   <span
                    className="fbot-bubble-text">
                    <Comment
  visible={true}
  height="80"
  width="80"
  ariaLabel="comment-loading"
  wrapperStyle={{}}
  wrapperClass="comment-wrapper"
  color="#fff"
  backgroundColor="#F4442E">
  </Comment>    </span>
    }
    {
        !isProcessing && <span
        className="fbot-bubble-text">
       { content}
           </span>
    }
        </div>
        )
    }
}