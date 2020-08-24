/**
 * @param {string} s
 * @return {number}
 */
var romanToInt=function(s){
            var dictionary={
                "I":1,
                "V":5,
                "X":10,
                "L":50,
                "C":100,
                "D":500,
                "M":1000,
            };
            var output=0;
            for(var i=0; i<s.length; i++){
                if( (s[i]=="I" || s[i]=="X" || s[i]=="C") && 
                ( (s[i+1]=="V" && s[i]!="X" && s[i]!="C" ) || (s[i+1]=="X" && s[i]!="C" ) || (s[i+1]=="L" && s[i]!="C") || (s[i+1]=="C" && s[i]!="C" ) || s[i+1]== "D" || s[i+1]=="M") &&
                (s[i] != s[i+1]) ){
                    output+=(dictionary[s[i+1]] - dictionary[s[i]] );
                    i++;
                }
                else{
                    output+=dictionary[s[i]];
                }
                    
                }
                return output;
};
