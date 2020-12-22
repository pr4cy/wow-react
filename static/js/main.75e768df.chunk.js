(this["webpackJsonpwow-memory"]=this["webpackJsonpwow-memory"]||[]).push([[0],{16:function(t,e,i){},17:function(t,e,i){"use strict";i.r(e);var s=i(0),a=i(1),n=i.n(a),r=i(9),c=i.n(r),d=(i(16),i(3)),o=i(4),h=i(2),u=i(6),m=i(5),l=(i(8),function(t){Object(u.a)(i,t);var e=Object(m.a)(i);function i(t){var s;return Object(d.a)(this,i),(s=e.call(this,t)).onClick=s.onClick.bind(Object(h.a)(s)),s}return Object(o.a)(i,[{key:"onClick",value:function(){this.props.matched||this.props.imageUp||this.props.onClick(this.props.id,this.props.image)}},{key:"render",value:function(){var t="./images/",e="Card";return this.props.imageUp?(e+=" flipcard",t=t+this.props.image+".png"):t+="back.png",this.props.matched&&(e+=" Matched"),Object(s.jsx)("img",{className:e,src:"".concat(t),alt:"",onClick:this.onClick})}}]),i}(a.Component)),C=i(10),f=i.n(C),j=function(){function t(){Object(d.a)(this,t),this.cards=[],this.NUM_IMAGES=10}return Object(o.a)(t,[{key:"generateCardSet",value:function(){this.cards=[];for(var t=1,e=1;e<=this.NUM_IMAGES;e++){var i={id:t,image:e,imageUp:!1,matched:!1},s={id:++t,image:e,imageUp:!1,matched:!1};this.cards.push(i),this.cards.push(s),t++}f()(this.cards)}},{key:"getCard",value:function(t){for(var e=0;e<2*this.NUM_IMAGES;e++)if(this.cards[e].id===t)return this.cards[e]}},{key:"flipCard",value:function(t,e){this.getCard(t).imageUp=e}},{key:"setCardAsMatched",value:function(t,e){this.getCard(t).matched=e}},{key:"cardsHaveIdenticalImages",value:function(t,e){return this.getCard(t).image===this.getCard(e).image}}]),t}(),v=function(t){Object(u.a)(i,t);var e=Object(m.a)(i);function i(t){var s;return Object(d.a)(this,i),(s=e.call(this,t)).state={},s.onCardClicked=s.onCardClicked.bind(Object(h.a)(s)),s.onPlayAgain=s.onPlayAgain.bind(Object(h.a)(s)),s.memoryCards=new j,s}return Object(o.a)(i,[{key:"componentDidMount",value:function(){this.initGame()}},{key:"initGame",value:function(){this.memoryCards.generateCardSet(),this.setState({turnNo:1,pairsFound:0,numClicksWithinTurn:0,firstId:void 0,secondId:void 0})}},{key:"getCardViews",value:function(){var t=this;return this.memoryCards.cards.map((function(e){return Object(s.jsx)(l,{id:e.id,image:e.image,imageUp:e.imageUp,matched:e.matched,onClick:t.onCardClicked},e.id)}))}},{key:"clearCards",value:function(t,e){2===this.state.numClicksWithinTurn&&(this.memoryCards.flipCard(this.state.firstId,!1),this.memoryCards.flipCard(this.state.secondId,!1),this.setState({firstId:void 0,secondId:void 0,numClicksWithinTurn:0,turnNo:this.state.turnNo+1}))}},{key:"onCardClicked",value:function(t,e){var i=this;0===this.state.numClicksWithinTurn||2===this.state.numClicksWithinTurn?(2===this.state.numClicksWithinTurn&&(clearTimeout(this.timeout),this.clearCards(this.state.firstId,this.state.secondId)),this.memoryCards.flipCard(t,!0),this.setState({firstId:t,numClicksWithinTurn:1})):1===this.state.numClicksWithinTurn&&(this.memoryCards.flipCard(t,!0),this.setState({secondId:t,numClicksWithinTurn:2}),this.memoryCards.cardsHaveIdenticalImages(t,this.state.firstId)?(this.memoryCards.setCardAsMatched(this.state.firstId,!0),this.memoryCards.setCardAsMatched(t,!0),this.setState({pairsFound:this.state.pairsFound+1,firstId:void 0,secondId:void 0,turnNo:this.state.turnNo+1,numClicksWithinTurn:0})):this.timeout=setTimeout((function(){i.clearCards(i.state.firstId,i.state.secondId)}),5e3))}},{key:"onPlayAgain",value:function(){this.initGame()}},{key:"render",value:function(){var t=this.getCardViews(),e=Object(s.jsxs)("div",{className:"Game-status",children:[Object(s.jsxs)("div",{children:["TOURS: ",this.state.turnNo]}),Object(s.jsxs)("div",{children:["PAIRES EN COURS: ",this.state.pairsFound]})]});return this.state.pairsFound===this.memoryCards.NUM_IMAGES&&(e=Object(s.jsxs)("div",{className:"Game-status",children:[Object(s.jsx)("div",{children:"LOKH'TAR OGAR ! JEU FINI BRAVO"}),Object(s.jsxs)("div",{children:["Avec ",this.state.turnNo-1," Tours"]}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{onClick:this.onPlayAgain,children:"ON REJOUE ?"})})]})),Object(s.jsxs)("div",{className:"Game",children:[Object(s.jsx)("header",{className:"Game-header",children:Object(s.jsx)("div",{className:"Game-title",children:"World Of Warcraft Memory Game !"})}),Object(s.jsx)("div",{children:e}),Object(s.jsx)("div",{className:"CardContainer",children:t})]})}}]),i}(a.Component);var p=function(){return Object(s.jsx)(v,{})},g=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,18)).then((function(e){var i=e.getCLS,s=e.getFID,a=e.getFCP,n=e.getLCP,r=e.getTTFB;i(t),s(t),a(t),n(t),r(t)}))};c.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(p,{})}),document.getElementById("root")),g()},8:function(t,e,i){}},[[17,1,2]]]);
//# sourceMappingURL=main.75e768df.chunk.js.map