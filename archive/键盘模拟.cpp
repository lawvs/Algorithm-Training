#include<windows.h>
int main(){
	byte num=0x5b;//��ʼ��0x5b
	Sleep(500);
	keybd_event(num,0,0,0);//���¼�
	keybd_event(num,0,KEYEVENTF_KEYUP,0);//�ɿ���
	
	Sleep(500);
	//��굥��
	mouse_event (MOUSEEVENTF_LEFTDOWN | MOUSEEVENTF_LEFTUP, 0, 0, 0, 0 );
	
	while(!OpenClipboard(NULL))
	{
	}
	BOOL CloseClipboard(void);
	return 0;
}
