/*
将两个有序数组合并为一个新的有序数组  
从input中读取数据输出到output  
input中前两个数据分别为两个有序数组长度
两个有序数组大小之和不应超过100
*/
#include<stdio.h>
#include<stdlib.h>
#define NUM 100//两个有序数组最大长度
main()
{
	//定义变量，初始化
	FILE *fp;//文件指针
	int num1,num2,result[NUM],temp;
    //打开文件
	if((fp=fopen("input.txt","r"))==NULL)//打开文件input
	{
		printf("文件打开失败\n");
		exit(0);
	}
	printf("input:\n数组1：\n");
    //读取数据
	fscanf(fp,"%d",&num1);//数组1大小
	fscanf(fp,"%d",&num2);//数组2大小

	
	for(int i=0;i<num1;i++)//将数组1内容读入数组同时输出屏幕
	{
		fscanf(fp,"%d",&result[i]);
		printf("%d ",result[i]);
	}
	printf("\n数组2：\n");
		for(;i<num1+num2;i++)//将数组2内容读入数组同时输出屏幕
	{
		fscanf(fp,"%d",&result[i]);
		printf("%d ",result[i]);
	}
	printf("\noutput:\n");
	fclose(fp);//关闭文件input

	//排序
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
	//将结果输出屏幕
	for(i=0;i<num1+num2;i++)
		printf("%d ",result[i]);
	printf("\n");

	//写入数据
	fp=fopen("output.txt","w");//打开文件output
	for(i=0;i<num1+num2;i++)
		fprintf(fp,"%d ",result[i]);

	fclose(fp);//关闭文件output
}