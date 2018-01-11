#include<windows.h>
int main(){
	byte num=0x5b;//开始键0x5b
	Sleep(500);
	keybd_event(num,0,0,0);//按下键
	keybd_event(num,0,KEYEVENTF_KEYUP,0);//松开键
	
	Sleep(500);
	//鼠标单击
	mouse_event (MOUSEEVENTF_LEFTDOWN | MOUSEEVENTF_LEFTUP, 0, 0, 0, 0 );
	
	while(!OpenClipboard(NULL))
	{
	}
	BOOL CloseClipboard(void);
	return 0;
}
