(self.webpackChunkwoostore_pro_documentation=self.webpackChunkwoostore_pro_documentation||[]).push([[3805],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,k=m["".concat(l,".").concat(d)]||m[d]||c[d]||r;return n?o.createElement(k,i(i({ref:t},u),{},{components:n})):o.createElement(k,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9426:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var o=n(2122),a=n(9756),r=(n(7294),n(3905)),i={sidebar_position:3,sidebar_label:"Configure Plugins"},s={unversionedId:"wordpress-setup/configure-plugins",id:"wordpress-setup/configure-plugins",isDocsHomePage:!1,title:"Configure Plugins",description:"In this section we will configure some of the plugins that you have installed from the previous section.",source:"@site/docs/wordpress-setup/configure-plugins.md",sourceDirName:"wordpress-setup",slug:"/wordpress-setup/configure-plugins",permalink:"/woostore_pro_documentation/wordpress-setup/configure-plugins",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/wordpress-setup/configure-plugins.md",version:"current",sidebar_label:"Configure Plugins",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Configure Plugins"},sidebar:"tutorialSidebar",previous:{title:"Install Plugins",permalink:"/woostore_pro_documentation/wordpress-setup/install-plugins"},next:{title:"Getting Started",permalink:"/woostore_pro_documentation/mobile-app-setup/getting-started"}},l=[{value:"Configuration",id:"configuration",children:[{value:"1. ACF to Rest Api",id:"1-acf-to-rest-api",children:[]},{value:"2. Pods - Custom Content Types and Fields",id:"2-pods---custom-content-types-and-fields",children:[]},{value:"3. Advanced Custom Fields",id:"3-advanced-custom-fields",children:[]},{value:"4. Post Types Order",id:"4-post-types-order",children:[]},{value:"5. WooCommerce",id:"5-woocommerce",children:[]},{value:"6. WooStore Pro Api",id:"6-woostore-pro-api",children:[]}]}],p={toc:l};function u(e){var t=e.components,i=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this section we will configure some of the plugins that you have installed from the previous section."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Please make sure that you have ",(0,r.kt)("strong",{parentName:"p"},"Activated")," the plugins from the previous section before you start configuring them."))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"The plugins which require some additional configuration are mentioned below with the steps you need to follow to configure them."),(0,r.kt)("p",null,"Please follow the steps properly to complete the configuration of the plugins."),(0,r.kt)("h3",{id:"1-acf-to-rest-api"},"1. ACF to Rest Api"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"Settings")," --\x3e ",(0,r.kt)("strong",{parentName:"li"},"Permalinks")),(0,r.kt)("li",{parentName:"ul"},"Scroll down to the section named ",(0,r.kt)("strong",{parentName:"li"},"ACF to REST API")),(0,r.kt)("li",{parentName:"ul"},"Make sure that the request version is set to ",(0,r.kt)("strong",{parentName:"li"},"v3")),(0,r.kt)("li",{parentName:"ul"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"Save Changes")," at the bottom to complete the modification.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ACF to Rest Api Plugin",src:n(5152).Z})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Setup for the above plugin is complete")),(0,r.kt)("h3",{id:"2-pods---custom-content-types-and-fields"},"2. Pods - Custom Content Types and Fields"),(0,r.kt)("p",null,"You will need to create a custom post type here which is used to get the sections for the home screen. This allows to change the home screen layout dynamically. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click on the left menu section ",(0,r.kt)("strong",{parentName:"li"},"Pods Admin"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Pods Plugin",src:n(5114).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"Add New")," from the top left corner"),(0,r.kt)("li",{parentName:"ul"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"Create New"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Pods Plugin",src:n(5373).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Make the following modifications",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Content Type: ",(0,r.kt)("strong",{parentName:"li"},"Custom Post Type")," "),(0,r.kt)("li",{parentName:"ul"},"Singular label: ",(0,r.kt)("strong",{parentName:"li"},"Section")),(0,r.kt)("li",{parentName:"ul"},"Plural label: ",(0,r.kt)("strong",{parentName:"li"},"Sections")),(0,r.kt)("li",{parentName:"ul"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"Next"))))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Pods Plugin",src:n(5263).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"From the top tabs click on ",(0,r.kt)("strong",{parentName:"li"},"Rest Api"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Pods Plugin",src:n(7097).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tick the box in front of ",(0,r.kt)("strong",{parentName:"li"},"Enable")," and ",(0,r.kt)("strong",{parentName:"li"},"Show All Fields (read-only)"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Pods Plugin",src:n(5296).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Finally click on ",(0,r.kt)("strong",{parentName:"li"},"Save Pod")," to save the changes.")),(0,r.kt)("p",null,"Click on the Pods Admin from the side menu. After you have followed the set up properly, it will look something like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Pods Plugin",src:n(1888).Z})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Setup for the above plugin is complete")),(0,r.kt)("h3",{id:"3-advanced-custom-fields"},"3. Advanced Custom Fields"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Go to the advanced ",(0,r.kt)("strong",{parentName:"li"},"Custom Fields")," page from the option in the side menu.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ACF Plugin",src:n(8752).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click on the ",(0,r.kt)("strong",{parentName:"li"},"Tools")," option from the tab at the top of the screen.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ACF Plugin",src:n(7824).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Under ",(0,r.kt)("strong",{parentName:"li"},"Import Field Group")," click on the ",(0,r.kt)("strong",{parentName:"li"},"Choose File")," button")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ACF Plugin",src:n(7278).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Import the ",(0,r.kt)("strong",{parentName:"li"},"acf-fields.json")," file from the download package. You can find the file in the ",(0,r.kt)("strong",{parentName:"li"},"woocommerce-essentials")," folder. After that click on the ",(0,r.kt)("strong",{parentName:"li"},"Import File")," to import the preset of custom fields.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ACF Plugin",src:n(8984).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Change the tab to ",(0,r.kt)("strong",{parentName:"li"},"Field Groups")," from the tab bar at the top of the screen, you will be able to see an entry ",(0,r.kt)("strong",{parentName:"li"},"Section Additional Fields")," in the table. If you don\u2019t please check if you encountered any errors. If yes, please correct them and perform the steps again.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ACF Plugin",src:n(7814).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You are now ready to create sections for your application\u2019s home page.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Setup for the above plugin is complete")),(0,r.kt)("h3",{id:"4-post-types-order"},"4. Post Types Order"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"Settings")," --\x3e ",(0,r.kt)("strong",{parentName:"li"},"Post Types Order")," from the side menu.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Post Types Order Plugin",src:n(9551).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Scroll down to section named ",(0,r.kt)("strong",{parentName:"li"},"General"),"."),(0,r.kt)("li",{parentName:"ul"},"Make sure the selected option is ",(0,r.kt)("strong",{parentName:"li"},"Show")," against the ",(0,r.kt)("strong",{parentName:"li"},"Section option"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Post Types Order Plugin",src:n(8596).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"Save Settings")," from the bottom.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Setup for the above plugin is complete")),(0,r.kt)("h3",{id:"5-woocommerce"},"5. WooCommerce"),(0,r.kt)("p",null,"The first time you activate woocommerce, it starts a wizard to setup your store. Please complete the setup for your store according to your business requirements."),(0,r.kt)("p",null,"You can also set up the ",(0,r.kt)("a",{parentName:"p",href:"install-plugins#8-advanced-shipment-tracking-for-woocommerce"},(0,r.kt)("strong",{parentName:"a"},"Advanced Shipment Tracking"))," plugin with WooCommerce by reading its description to best suit your needs."),(0,r.kt)("p",null,"Now you need to create some Rest Api Keys which will be used in the application to connect to your WooCommerce Store on the website."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"WooCommerce")," --\x3e ",(0,r.kt)("strong",{parentName:"li"},"Settings")," from the side menu.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"WooCommerce Plugin",src:n(9759).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"Advanced Tab")," from the top tabbar."),(0,r.kt)("li",{parentName:"ul"},"Click on the ",(0,r.kt)("strong",{parentName:"li"},"REST API")," link which is located below the tabbar")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"WooCommerce Plugin",src:n(4656).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Add Key")," to create a pair of keys.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Give a ",(0,r.kt)("strong",{parentName:"p"},"Description")," and select a ",(0,r.kt)("strong",{parentName:"p"},"User"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Make sure the permissions are set to ",(0,r.kt)("strong",{parentName:"p"},"READ"),"."),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If the permissions are set to ",(0,r.kt)("strong",{parentName:"p"},"Read/Write")," and someone else got these keys, BAD THINGS CAN HAPPEN TO YOUR STORE."))),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"WooCommerce Plugin",src:n(1122).Z}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Generate Api Key"),". You will be able to see the keys for one and only time so keep in mind to save them somewhere as you will need to enter them in the mobile application."))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Setup for the above plugin is complete")),(0,r.kt)("h3",{id:"6-woostore-pro-api"},"6. WooStore Pro Api"),(0,r.kt)("p",null,"After you have installed the plugin, you will need to ",(0,r.kt)("strong",{parentName:"p"},"activate")," it with the ",(0,r.kt)("strong",{parentName:"p"},"purchase code")," you got from codecanyon."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Please follow this link to get your purchase code:\n",(0,r.kt)("a",{parentName:"p",href:"https://help.market.envato.com/hc/en-us/articles/202822600-Where-Is-My-Purchase-Code-"},"https://help.market.envato.com/hc/en-us/articles/202822600-Where-Is-My-Purchase-Code-"))),(0,r.kt)("p",null,"Once you have activated the plugin you can set up the required information for your application to work with."),(0,r.kt)("h4",{id:"1-set-up-your-jwt-authentication-secret-key"},"1. Set up your JWT Authentication Secret Key."),(0,r.kt)("p",null,"This is your secret JWT key which makes your application secure and protects your user\u2019s data while transferring via network calls.\nYou need to set up a cryptographically secure key in this field. You can copy one from here: ",(0,r.kt)("a",{parentName:"p",href:"https://api.wordpress.org/secret-key/1.1/salt/"},"https://api.wordpress.org/secret-key/1.1/salt/")),(0,r.kt)("p",null,"After you\u2019ve set the value, press the save button to save it in the database."),(0,r.kt)("h4",{id:"2-setup-your-firebase-server-api-key"},"2. Setup your Firebase Server Api Key"),(0,r.kt)("p",null,"This key is used to send push notifications to your user when their order status changes. If you do not set this value correctly, push notification will not work."),(0,r.kt)("p",null,"You can get this key when you will set up your application with firebase in this section ",(0,r.kt)("a",{parentName:"p",href:"/mobile-app-setup/firebase"},"Setup Firebase")," - ",(0,r.kt)("a",{parentName:"p",href:"/mobile-app-setup/firebase#cloud-messaging"},"Cloud Messaging")),(0,r.kt)("h4",{id:"3-order-status-title-and-order-status-message"},"3. Order status title and order status message"),(0,r.kt)("p",null,"This is the title and body of the push notification that will be sent to your customers when their order status is changed."))}u.isMDXComponent=!0},8752:function(e,t,n){"use strict";t.Z=n.p+"assets/images/pc-acf-1-9d46bb62fe18948c47b06c88076b6578.png"},7824:function(e,t,n){"use strict";t.Z=n.p+"assets/images/pc-acf-2-de8b8434ba0b9eced72b3900ca24aff4.png"},7278:function(e,t,n){"use strict";t.Z=n.p+"assets/images/pc-acf-3-9ce9882fc50b449a129c425fc233de97.png"},8984:function(e,t,n){"use strict";t.Z=n.p+"assets/images/pc-acf-4-fa0775e54ef9e29e6c72eb90981a03b5.png"},7814:function(e,t,n){"use strict";t.Z=n.p+"assets/images/pc-acf-5-37ea543261f456e898fe31a4c2bd7abc.png"},5152:function(e,t,n){"use strict";t.Z=n.p+"assets/images/pc-acf-rest-3c92816876be3abe35648199d0cab1d3.png"},5114:function(e,t,n){"use strict";t.Z=n.p+"assets/images/pc-pods-1-d69d2069eb350d334d26f361b13accd3.png"},5373:function(e,t,n){"use strict";t.Z=n.p+"assets/images/pc-pods-2-8c973ab3c577ad6389466fb07b6524eb.png"},5263:function(e,t,n){"use strict";t.Z=n.p+"assets/images/pc-pods-3-b00d8816e7edf52fb21cc393e314a0ce.png"},7097:function(e,t,n){"use strict";t.Z=n.p+"assets/images/pc-pods-4-f8c6c2e932eed6c92df015485baad41b.png"},5296:function(e,t,n){"use strict";t.Z=n.p+"assets/images/pc-pods-5-2c3d7ae0a1403e31e87b8dc9716d985b.png"},1888:function(e,t,n){"use strict";t.Z=n.p+"assets/images/pc-pods-6-17759774b1c8f8574b37aa6960e23962.png"},9551:function(e,t,n){"use strict";t.Z=n.p+"assets/images/pc-post-types-order-1-7a9457c8ee798e659faa92ab99b5b8b3.png"},8596:function(e,t,n){"use strict";t.Z=n.p+"assets/images/pc-post-types-order-2-73c61115c115e2d3fb3115eeb100e1e8.png"},9759:function(e,t,n){"use strict";t.Z=n.p+"assets/images/pc-woo-1-62e34cd659ceb5086029c869abe78c4d.png"},4656:function(e,t,n){"use strict";t.Z=n.p+"assets/images/pc-woo-2-3fcea16e815d50664a5b073f6b13f134.png"},1122:function(e,t,n){"use strict";t.Z=n.p+"assets/images/pc-woo-3-08959432f2ad3f3a1b5a7e34dd3f3e6c.png"}}]);