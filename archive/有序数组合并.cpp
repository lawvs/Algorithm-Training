/*
��������������ϲ�Ϊһ���µ���������  
��input�ж�ȡ���������output  
input��ǰ�������ݷֱ�Ϊ�����������鳤��
�������������С֮�Ͳ�Ӧ����100
*/
#include<stdio.h>
#include<stdlib.h>
#define NUM 100//��������������󳤶�
main()
{
	//�����������ʼ��
	FILE *fp;//�ļ�ָ��
	int num1,num2,result[NUM],temp;
    //���ļ�
	if((fp=fopen("input.txt","r"))==NULL)//���ļ�input
	{
		printf("�ļ���ʧ��\n");
		exit(0);
	}
	printf("input:\n����1��\n");
    //��ȡ����
	fscanf(fp,"%d",&num1);//����1��С
	fscanf(fp,"%d",&num2);//����2��С

	
	for(int i=0;i<num1;i++)//������1���ݶ�������ͬʱ�����Ļ
	{
		fscanf(fp,"%d",&result[i]);
		printf("%d ",result[i]);
	}
	printf("\n����2��\n");
		for(;i<num1+num2;i++)//������2���ݶ�������ͬʱ�����Ļ
	{
		fscanf(fp,"%d",&result[i]);
		printf("%d ",result[i]);
	}
	printf("\noutput:\n");
	fclose(fp);//�ر��ļ�input

	//����
	for(i=0;i<num1+num2;i++)
	{
		for(int j=i+1;j<num1+num2;j++)
			if(result[i]>result[j])
			{
				temp=result[i];
				result[i]=result[j];
				result[j]=temp;
			}
	}
	//����������Ļ
	for(i=0;i<num1+num2;i++)
		printf("%d ",result[i]);
	printf("\n");

	//д������
	fp=fopen("output.txt","w");//���ļ�output
	for(i=0;i<num1+num2;i++)
		fprintf(fp,"%d ",result[i]);

	fclose(fp);//�ر��ļ�output
}