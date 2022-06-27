var amp=[[0,0],0];//二重配列。
var vol=[[0,0],0];//電位
var ohm=[[0,0],0];//
function GetType(x,y)//正規表現の酷使 画像のsrcを得る。
{
	var Data=document.getElementById("c"+x+"_"+y).innerHTML;
	
	Data=Data.replace(/genelec.files\//g,"").replace(/\.PNG/g,"").replace(/\<\/td\>/g,"");
	Data=Data.replace(/height\=\"..\"\s/g,"").replace(/width\=\"..\"/g,"");
	Data=Data.replace(/onclick\=/g,"").replace(/img/g,"").replace(/src/g,"");
	Data=Data.replace(/\<\s\=/g,"").replace(/\>/g,"").replace(/\"Path/g,"");
	Data=Data.replace(/\)\"/g,"").replace(/\s/g,"").replace(/\(/g,"");
	Data=Data.replace(/\".?\,.?/g,"").replace(/\"/,"");
	return Data;
}


	/*
	関数内部に「分かっているデータ」配列を作る。
	分かっているデータを求める。
	↓
	そこから求められるデータを求める。
	
	繰り返す
	*/
function Calc()//トライアル式無限ループ
{
	var ampk=[""]//ampknown ["5,1",""]
	var volk=[""]//〃
	var ohmk=[""]//〃
	for(i=1;i<=rw;i++)
	{
		for(j=1;j<=colu;j++)
		{
			/*
			"hori","vert","2crn","3crn","4crn","1crn",
				"crss","div1","div2","div3","div4","sop1",
				"sop2","scl1","scl2","bat1","bat2","bat3",
				"bat4","blb1","blb2","res1","res2","amp1",
				"amp2","vlt1","vlt2","dbt1","dbt2","dbt3","dbt4","blnk"
			*/
			if(GetType(j,i)==)
			{
				
			}
		}
	}
	while(true)
	{
		//ampcheck
		//volcheck
		//ohmcheck
		//オームの法則
	}
}