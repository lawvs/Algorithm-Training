/*
2014��9��30��
��������������ϲ�Ϊһ���µ���������
��input�ж�ȡ���������output
input��ǰ�������ݷֱ�Ϊ��������������
�����������κ���ֵӦΪ��������-32768~+32767��Χ�ڣ�����int���ͣ�
*/

#include<stdio.h>
#include<stdlib.h>
#include<malloc.h>

struct linklist//��������ṹ��
{
	int data;
	linklist *next;
}

main()
{
	//���������������������ʼ��
	FILE *fp;//�ļ�ָ��
	int i,num1,num2;
	struct linklist *head1,*head2,*p1,*p2;
	void Destroy_Linklist(linklist  *L);//����ɾ��������
	void Prinf_Linklist(linklist *L);//������ӡ������
	void MergeList(linklist *head1,linklist *head2);//������������ɾ���ظ��ڵ㺯��

	head1=(struct linklist*)malloc(sizeof(struct linklist));//����һ���µ�Ԫ ����1ͷ���
	head2=(struct linklist*)malloc(sizeof(struct linklist));//����һ���µ�Ԫ ����2ͷ���


    //���ļ�
	if((fp=fopen("input.txt","r"))==NULL)//���ļ�input
	{
		printf("�ļ���ʧ��\n");
		exit(0);
	}

    //��ȡ���� ������1����2���ݶ����ڴ沢��ӡ����Ļ��
	fscanf(fp,"%d",&num1);//����1��С
	fscanf(fp,"%d",&num2);//����2��С
	printf("input:\n����1��\n");

	p2=head1;
	for(i=0;i<num1;++i)//������1���ݶ���ͬʱ�����Ļ
	{
		p1=(struct linklist*)malloc(sizeof(struct linklist));
		fscanf(fp,"%d",&p1->data);
		printf("%d ",p1->data);
		p2->next=p1;
		p1->next=NULL;
		p2=p2->next;
	}
	
	printf("\n����2��\n");

	p2=head2;
    for(i=0;i<num2;++i)//������2���ݶ���ͬʱ�����Ļ
	{
		p1=(struct linklist*)malloc(sizeof(struct linklist));
		fscanf(fp,"%d",&p1->data);
		printf("%d ",p1->data);
		p2->next=p1;
		p1->next=NULL;
		p2=p2->next;
	}
	
	fclose(fp);//�ر��ļ�input


    MergeList(head1,head2);//��������ɾ���ظ��ڵ�
	Prinf_Linklist(head1); //��ӡ�����е�����Ԫ�ز��������Ļ
	Destroy_Linklist(head1);//ɾ����̬���ɵ�����
}

/*
����������������ɾ���ظ��ڵ��ͷ��ڴ�
head1 head2Ϊ��������ͷָ��
�����������head1Ϊͷָ��
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
			free(temp);//�ͷ�����1�ظ�����ڴ�
			temp=p2;
			p2=p2->next;
			free(temp);//�ͷ�����2�ظ�����ڴ�
		}
		else
		{
			p0->next=p1;
			p0=p1;
			p1=p1->next;
		}
	}

	p0->next=p1?p1:p2;//���ʣ��ڵ�
	free(head2);//�ͷ�����2ͷ���
}


/*
��ӡ�����е�����Ԫ�ز��������Ļ
��������output Ԫ��֮���Կո����
*headΪ����ͷָ��
*/
void Prinf_Linklist(linklist *head)  
{
	//д������
	FILE *fp;//�ļ�ָ��
	linklist *p1;
	printf("\noutput:\n");
	fp=fopen("output.txt","w");//���ļ�output
	p1=head->next;
	while(p1)
	{
		printf("%d ",p1->data);
		fprintf(fp,"%d ",p1->data);
		p1=p1->next;
	}
	printf("\n");
	fclose(fp);//�ر��ļ�output
}


void Destroy_Linklist(linklist  *L)  //ɾ����̬���ɵ�����
{
	linklist *p;
	while(L->next)
	{
		p=L->next;
		L->next=p->next;
		delete p;
	 }
}