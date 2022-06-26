function Save()
{
	var Data=document.getElementById("crc").innerHTML;
	var exp="";
	var i;
	var tmp=[];
	var Tmp=0;
	Data=Data.replace(/\<tbody\>/g,"").replace(/\<\/tbody\>/g,"");
	Data=Data.replace(/\<\/tr\>/g,"");
	Data=Data.replace(/genelec.files\//g,"").replace(/\.PNG/g,"").replace(/\<\/td\>/g,"");
	Data=Data.replace(/height\=\"..\"\s/g,"");
	Data=Data.replace(/width\=\"..\"/g,"");
	Data=Data.replace(/\<td.+?\>/g,"");
	Data=Data.replace(/\<tr.+?\>/g,"");
	Data=Data.replace(/onclick\=/g,"");
	Data=Data.replace(/img/g,"").replace(/src/g,"");
	Data=Data.replace(/\<\s\=/g,"");
	Data=Data.replace(/\"Path/g,"");
	Data=Data.replace(/\)\"/g,"");
	Data=Data.replace(/\s/g,"");
	Data=Data.replace(/\,/g,":");
	Data=Data.replace(/\(/g,"");
	Data=Data.split(">");
	//bord
	tmp=[0,0,0,0];
	for(i in Data)
	{
		Tmp=tmp[1];
		tmp=Data[i].slice(6).split(":");
		tmp[2]=Data[i].slice(1,5);//src
		//alert(tmp);
		exp+=tmp[2];
		if(i%colu==colu-1)
		{
		exp+=",";
		}
	}
	document.frm.svng.value=exp;
	alert("出力完了しました。");
}
	/*
2crndiv4div4res1div4sop13crn,
amp2vlt2sop22crndiv33crnblb2,
bat3scl24crncrssdiv41crnres2,
scl24crnhori1crnblb22crndiv1,
div2dbt2bat2res11crnvertbat4,
dbt32crnhoriscl1vlt11crndbt4,
4crndiv3amp1blb1bat1dbt11crn,
2crndiv4div4res1div4sop13crn,amp2vlt2sop22crndiv33crnblb2,bat3scl24crncrssdiv41crnres2,scl24crnhori1crnblb22crndiv1,div2dbt2bat2res11crnvertbat4,dbt32crnhoriscl1vlt11crndbt4,4crndiv3amp1blb1bat1dbt11crn,
	*/

var d4="";
function Imp()
{
	if(!bord){alert("枠線が出ていないので入力できません。");return;}
	var imp=document.frm.svng.value.replace(/\s　/g,"");//全角スペースを含むスペース消去
	var imp=document.frm.svng.value.replace(/\(.*?\)/g,"");//下方互換のため()内を消去
	var i,k;
	var tmp="";//一時退避
	var dat=[];//なんやかんや
	imp=imp.split(",");
	var j=imp[0].length/4;
	if(j%1){alert("データに誤りがあります。");return;}//
	if(!confirm("入力すると、現在のデータは上書きされます。よろしいですか？"))
	{
		return;
	}
	document.getElementById("crc").innerHTML="";
	for(i in imp)//行ずつ
	{
		if(imp[i].length==0){break;}//終了
		if(j!=imp[i].length/4){alert("データに誤りがあります。");return;}
		Write("f",(i-(-1)),0)//行前
		for(k=0;k<j;k++)
		{
			tmp=imp[i].substr(k*4,4);//4文字取り出す
			Write(tmp,(i-(-1)),(k-(-1)));//出力
		}
		Write("e",(i-(-1)),0);//次行出力
	}
	document.getElementById("crc").innerHTML=d4;
	d4="";
	colu=j;
	rw=i;
}

function Write(srcs,rows,cols)//出力
{

	if(srcs=="f")
	{
		d4+='<tr id="r'+rows+'">';
	}
	else if(srcs=="e")
	{
		d4+='</tr>'
	}
	else
	{
		d4+='<td style="border: '+Bwidth+'px '+Bstyle+' '+Bcolor+
			'" id="c'+cols+'_'+rows+'">'+'<img src="genelec.files/'+srcs+'.PNG" width=32 height=32'+
			' onclick="Path('+cols+","+rows+')"></td>';
	}

}