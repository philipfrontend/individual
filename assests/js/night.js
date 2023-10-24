                function setCookie(c_name,value,exdays)
                {
                    console.log("set cookie call");
                    var exdate=new Date();
                    exdate.setDate(exdate.getDate() + exdays);
                    var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
                    document.cookie=c_name + "=" + c_value;
                }
                
                function checkCookie()
                {
                    
                    var res = false;
                    console.log("Check cookie call");
                    
                    var username=getCookie("nightmode");
                    if (username!=null && username!="")
                    {
                      console.log("Welcome again " + username);
                    }
                    else 
                    {
                        username=true;
                        if (username!=null && username!="")
                        {
                            setCookie("nightmode",username,365);
                        }
                    }
                    res = username;
                    console.log("res =-" +res);
                    return res;
                }
                
                function getCookie(c_name)
                {
                    console.log("get cookie call");
                    var i,x,y,ARRcookies=document.cookie.split(";");
                    for (i=0;i<ARRcookies.length;i++)
                    {
                      x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
                      y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
                      x=x.replace(/^\s+|\s+$/g,"");
                      if (x==c_name)
                        {
                        return unescape(y);
                        }
                    }
                }