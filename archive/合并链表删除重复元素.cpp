/*
2014年9月30日
将两个有序链表合并为一个新的有序链表
从input中读取数据输出到output
input中前两个数据分别为两个有序链表长度
有序链表中任何数值应为整数且在-32768~+32767范围内（符合int类型）
*/

#include<stdio.h>
#include<stdlib.h>
#include<malloc.h>

struct linklist//创建链表结构体
{
	int data;
	linklist *next;
}

main()
{
	//定义变量，声明函数，初始化
	FILE *fp;//文件指针
	int i,num1,num2;
	struct linklist *head1,*head2,*p1,*p2;
	void Destroy_Linklist(linklist  *L);//声明删除链表函数
	void Prinf_Linklist(linklist *L);//声明打印链表函数
	void MergeList(linklist *head1,linklist *head2);//声明链表排序删除重复节点函数

	head1=(struct linklist*)malloc(sizeof(struct linklist));//开辟一个新单元 链表1头结点
	head2=(struct linklist*)malloc(sizeof(struct linklist));//开辟一个新单元 链表2头结点


    //打开文件
	if((fp=fopen("input.txt","r"))==NULL)//打开文件input
	{
		printf("文件打开失败\n");
		exit(0);
	}

    //读取数据 将链表1链表2数据读入内存并打印在屏幕上
	fscanf(fp,"%d",&num1);//链表1大小
	fscanf(fp,"%d",&num2);//链表2大小
	printf("input:\n链表1：\n");

	p2=head1;
	for(i=0;i<num1;++i)//将链表1内容读入同时输出屏幕
	{
		p1=(struct linklist*)malloc(sizeof(struct linklist));
		fscanf(fp,"%d",&p1->data);
		printf("%d ",p1->data);
		p2->next=p1;
		p1->next=NULL;
		p2=p2->next;
	}
	
	printf("\n链表2：\n");

	p2=head2;
    for(i=0;i<num2;++i)//将链表2内容读入同时输出屏幕
	{
		p1=(struct linklist*)malloc(sizeof(struct linklist));
		fscanf(fp,"%d",&p1->data);
		printf("%d ",p1->data);
		p2->next=p1;
		p1->next=NULL;
		p2=p2->next;
	}
	
	fclose(fp);//关闭文件input


    MergeList(head1,head2);//链表排序删除重复节点
	Prinf_Linklist(head1); //打印链表中的所有元素并输出到屏幕
	Destroy_Linklist(head1);//删除动态生成的链表
}

/*
排序两个有序链表并删除重复节点释放内存
head1 head2为两个链表头指针
排序后链表以head1为头指针
*/
void MergeList(linklist *head1,linklist *head2)
{
	linklist *p0,*p1,*p2,*temp;
	p0=head1;
	p1=head1->next;
	p2=head2->next;
	while(p1&&p2)
	{
		if(p1->data > p2->data)
		{
			p0->next=p2;
			p0=p2;
			p2=p2->next;
			
		}
		else if(p1->data==p2->data)
		{
			temp=p1;
			p1=p1->next;
			free(temp);//释放链表1重复结点内存
			temp=p2;
			p2=p2->next;
			free(temp);//释放链表2重复结点内存
		}
		else
		{
			p0->next=p1;
			p0=p1;
			p1=p1->next;
		}
	}

	p0->next=p1?p1:p2;//添加剩余节点
	free(head2);//释放链表2头结点
}


/*
打印链表中的所有元素并输出到屏幕
结果输出到output 元素之间以空格隔开
*head为链表头指针
*/
void Prinf_Linklist(linklist *head)  
{
	//写入数据
	FILE *fp;//文件指针
	linklist *p1;
	printf("\noutput:\n");
	fp=fopen("output.txt","w");//打开文件output
	p1=head->next;
	while(p1)
	{
		printf("%d ",p1->data);
		fprintf(fp,"%d ",p1->data);
		p1=p1->next;
	}
	printf("\n");
	fclose(fp);//关闭文件output
}


void Destroy_Linklist(linklist  *L)  //删除动态生成的链表
{
	linklist *p;
	while(L->next)
	{
		p=L->next;
		L->next=p->next;
		delete p;
	 }
}