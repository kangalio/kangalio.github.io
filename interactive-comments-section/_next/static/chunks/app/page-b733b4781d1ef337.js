(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4527:function(e,t,a){Promise.resolve().then(a.bind(a,3514)),Promise.resolve().then(a.t.bind(a,2935,23)),Promise.resolve().then(a.t.bind(a,46,23))},3514:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return k}});var n=a(3827),s=JSON.parse('{"currentUser":{"image":{"png":"./images/avatars/image-juliusomo.png","webp":"./images/avatars/image-juliusomo.webp"},"username":"juliusomo"},"comments":[{"id":1,"content":"Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You\'ve nailed the design and the responsiveness at various breakpoints works really well.","createdAt":"1 month ago","score":12,"user":{"image":{"png":"./images/avatars/image-amyrobson.png","webp":"./images/avatars/image-amyrobson.webp"},"username":"amyrobson"},"replies":[]},{"id":2,"content":"Woah, your project looks awesome! How long have you been coding for? I\'m still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!","createdAt":"2 weeks ago","score":5,"user":{"image":{"png":"./images/avatars/image-maxblagun.png","webp":"./images/avatars/image-maxblagun.webp"},"username":"maxblagun"},"replies":[{"id":3,"content":"If you\'re still new, I\'d recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It\'s very tempting to jump ahead but lay a solid foundation first.","createdAt":"1 week ago","score":4,"replyingTo":"maxblagun","user":{"image":{"png":"./images/avatars/image-ramsesmiron.png","webp":"./images/avatars/image-ramsesmiron.webp"},"username":"ramsesmiron"}},{"id":4,"content":"I couldn\'t agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.","createdAt":"2 days ago","score":2,"replyingTo":"ramsesmiron","user":{"image":{"png":"./images/avatars/image-juliusomo.png","webp":"./images/avatars/image-juliusomo.webp"},"username":"juliusomo"}}]}]}'),o=a(6699),r=a.n(o),i=a(4662),l=a.n(i),c={src:"/_next/static/media/icon-reply.23d7b637.svg",height:13,width:14,blurWidth:0,blurHeight:0},m={src:"/_next/static/media/icon-delete.f314ad3f.svg",height:14,width:12,blurWidth:0,blurHeight:0},d={src:"/_next/static/media/icon-edit.ff1ce63f.svg",height:14,width:14,blurWidth:0,blurHeight:0},u=a(4090),_=a(6154),p=a.n(_);function h(e){let{onCancel:t,onConfirm:a}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:p().backgrounddim,onClick:t}),(0,n.jsxs)("div",{className:p().card,children:[(0,n.jsx)("span",{className:p().head,children:"Delete comment"}),(0,n.jsx)("div",{className:p().text,children:"Are you sure you want to delete this comment? This will remove the comment and can't be undone."}),(0,n.jsxs)("div",{className:p().buttons,children:[(0,n.jsx)("div",{className:p().no,onClick:t,children:"NO, CANCEL"}),(0,n.jsx)("div",{className:p().yes,onClick:a,children:"YES, DELETE"})]})]})]})}var g=a(1287),v=a.n(g),x=a(9689),b=a.n(x);function f(e){let{className:t,initialText:a,placeholder:s,buttonText:o,flowVertical:r,onSubmit:i}=e,[l,c]=(0,u.useState)(a);function m(){c(""),i(l)}return(0,n.jsxs)("div",{className:"".concat(b().container," ").concat(r?b().vertical:b().horizontal," ").concat(t),children:[(0,n.jsx)("textarea",{className:"".concat(b().input),value:l,onInput:e=>c(e.target.value),onKeyDown:e=>{console.log(e),"Enter"===e.key&&e.ctrlKey&&m()},placeholder:s}),(0,n.jsx)("button",{className:"".concat(b().button),disabled:0===l.length,onClick:()=>m(),children:o})]})}function C(e){let{avatar:t,submitLabel:a,onSubmit:s}=e;return(0,n.jsxs)("div",{className:v().root,children:[(0,n.jsx)("img",{className:v().avatar,src:t,alt:""}),(0,n.jsx)(f,{initialText:"",placeholder:"Add a comment...",onSubmit:s,flowVertical:!1,buttonText:a})]})}function j(e){let{username:t,text:a,setText:s,votes:o,age:r,avatar:i,selfAvatar:_,isSelf:p,onDelete:g,onReply:v,onUpvote:x,onDownvote:b}=e,[j,w]=(0,u.useState)(!1),[y,N]=(0,u.useState)(!1),[k,S]=(0,u.useState)(!1);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:l().withreply,children:[(0,n.jsxs)("div",{className:l().comment,children:[(0,n.jsxs)("div",{className:l().votebox,children:[(0,n.jsx)("div",{className:l().upvote,onClick:x,children:(0,n.jsx)("svg",{width:"11",height:"11",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z",fill:"currentColor"})})}),(0,n.jsx)("span",{className:l().votes,children:o}),(0,n.jsx)("div",{className:l().downvote,onClick:b,children:(0,n.jsx)("svg",{width:"11",height:"3",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z",fill:"currentColor"})})})]}),(0,n.jsxs)("div",{className:l().topbarleft,children:[(0,n.jsx)("img",{className:l().avatar,src:i,alt:""}),(0,n.jsxs)("div",{className:l().usernameGroup,children:[(0,n.jsx)("span",{className:l().username,children:t}),p?(0,n.jsx)("span",{className:l().you,children:"you"}):""]}),(0,n.jsx)("span",{className:l().createdat,children:r})]}),(0,n.jsx)("div",{className:l().actions,children:p?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:l().actiondelete,onClick:()=>w(!0),children:[(0,n.jsx)("img",{className:l().deleteicon,src:m,alt:""}),(0,n.jsx)("span",{className:l().deletetext,children:"Delete"})]}),(0,n.jsxs)("div",{className:l().actionedit,onClick:()=>S(!k),children:[(0,n.jsx)("img",{className:l().editicon,src:d,alt:""}),(0,n.jsx)("span",{className:l().edittext,children:"Edit"})]})]}):(0,n.jsxs)("div",{className:l().actionreply,onClick:()=>N(!y),children:[(0,n.jsx)("img",{className:l().replyicon,src:c,alt:""}),(0,n.jsx)("span",{className:l().replytext,children:"Reply"})]})}),k?(0,n.jsx)(f,{className:l().content+" "+l().editinput,initialText:a,buttonText:"UPDATE",placeholder:"Edit comment...",flowVertical:!0,onSubmit:e=>{S(!1),s(e)}}):(0,n.jsx)("div",{className:l().content+" "+l().text,children:a})]}),y?(0,n.jsx)(C,{avatar:_,submitLabel:"REPLY",onSubmit:e=>{N(!1),v(e)}}):null]}),j?(0,n.jsx)(h,{onCancel:()=>w(!1),onConfirm:()=>{w(!1),g()}}):null]})}var w=a(437),y=a.n(w);function N(e){let{comment:t,setComment:a,selfUser:s,onDelete:o,onReply:r}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(j,{username:t.user.username,text:t.content,setText:e=>{t.content=e,a()},votes:t.score,onUpvote:()=>{t.score+=1,a()},onDownvote:()=>{t.score-=1,a()},age:t.createdAt,avatar:t.user.image.png,selfAvatar:s.image.png,isSelf:t.user.username===s.username,onDelete:o,onReply:r}),t.replies.length>0?(0,n.jsxs)("div",{className:y().replybox,children:[(0,n.jsx)("div",{className:y().replyline}),(0,n.jsx)("div",{className:y().replies,children:t.replies.map(e=>(0,n.jsx)(j,{username:e.user.username,text:e.content,setText:t=>{e.content=t,a()},votes:e.score,onUpvote:()=>{e.score+=1,a()},onDownvote:()=>{e.score-=1,a()},age:e.createdAt,avatar:e.user.image.png,selfAvatar:s.image.png,isSelf:e.user.username===s.username,onDelete:()=>{t.replies=t.replies.filter(t=>t.id!==e.id),a()},onReply:e=>{t.replies.push({content:e,createdAt:"now",id:1234,score:0,replyingTo:t.user.username,user:s}),a()}},e.id))})]}):""]})}function k(){let[e,t]=(0,u.useState)({currentUser:{image:{png:"",webp:""},username:""},comments:[]}),[a,o]=(0,u.useState)(!0);return(0,u.useEffect)(()=>{if(a){o(!1);let e=localStorage.getItem("dataJson");t(e?JSON.parse(e):s);return}localStorage.setItem("dataJson",JSON.stringify(e))},[e,a]),(0,n.jsxs)("div",{className:r().root,children:[e.comments.map(a=>(0,n.jsx)(N,{comment:a,setComment:()=>t({...e}),onDelete:()=>{e.comments=e.comments.filter(e=>e.id!==a.id),t({...e})},onReply:n=>{a.replies.push({content:n,createdAt:"now",id:1234,score:0,replyingTo:a.user.username,user:e.currentUser}),t({...e})},selfUser:e.currentUser},a.id)),(0,n.jsx)(C,{avatar:e.currentUser.image.png,submitLabel:"SEND",onSubmit:a=>{e.comments.push({content:a,createdAt:"now",id:1234,replies:[],score:0,user:e.currentUser}),t({...e})}})]})}},46:function(){},1287:function(e){e.exports={root:"AddComment_root__d4oAP",avatar:"AddComment_avatar__23Jyj"}},4662:function(e){e.exports={withreply:"CommentCard_withreply__vvF_r",comment:"CommentCard_comment__YWOfq",votebox:"CommentCard_votebox__R7vZ2",upvote:"CommentCard_upvote__PePbM",downvote:"CommentCard_downvote__YwQnW",votes:"CommentCard_votes___Fbv6",topbarleft:"CommentCard_topbarleft__54FVO",username:"CommentCard_username__wtwo_",you:"CommentCard_you__3X9z1",avatar:"CommentCard_avatar__fMFFE",actions:"CommentCard_actions__rTzvd",actionreply:"CommentCard_actionreply__PNGEH",actiondelete:"CommentCard_actiondelete__CE_t1",actionedit:"CommentCard_actionedit__KbRa0",content:"CommentCard_content__Xh2_5",editgroup:"CommentCard_editgroup__69xJc"}},437:function(e){e.exports={replybox:"CommentChain_replybox__4T0_S",replyline:"CommentChain_replyline__bfBv4",replies:"CommentChain_replies__eaY_i"}},6699:function(e){e.exports={root:"CommentSection_root__d98_b"}},6154:function(e){e.exports={backgrounddim:"DeleteConfirmation_backgrounddim__auyL_",card:"DeleteConfirmation_card__IgaNn",head:"DeleteConfirmation_head__qY13Z",buttons:"DeleteConfirmation_buttons__aXvX8",no:"DeleteConfirmation_no__AIHpn",yes:"DeleteConfirmation_yes__n_SrW"}},9689:function(e){e.exports={container:"SubmittableTextArea_container__w2qJX",horizontal:"SubmittableTextArea_horizontal__MzUgd",vertical:"SubmittableTextArea_vertical__qS_3q",input:"SubmittableTextArea_input__Q_Nk_",button:"SubmittableTextArea_button__Uk3Uk"}},2935:function(e){e.exports={style:{fontFamily:"'__Rubik_39df3a', '__Rubik_Fallback_39df3a'",fontStyle:"normal"},className:"__className_39df3a"}}},function(e){e.O(0,[971,69,744],function(){return e(e.s=4527)}),_N_E=e.O()}]);