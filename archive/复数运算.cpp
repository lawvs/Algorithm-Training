/*
	��������
	Date: 11/02/16 11:49
	Description:ʵ����������������
*/

#include<iostream>
#include<iomanip>
using namespace std;

//������
class Complex
{
	public:
		Complex(double real,double imag);
		bool print();
		//���������
		const Complex& operator +(const Complex &comp1);
		const Complex& operator -(const Complex &comp1);
		const Complex& operator *(const Complex &comp1);
		const Complex& operator /(const Complex &comp1);
	private:
		double real;
		double imag;
};

//���캯��
Complex::Complex(double real=0.0,double imag=0.0)
{
	this->real=real;
	this->imag=imag;
}

//��ӡ��� ����2λС��
bool Complex::print()
{
	cout<<setiosflags(ios::fixed)<<setprecision(2)<<real<<"+"<<imag<<"i"<<endl;
	return true;
}

//���������+
const Complex& Complex::operator +(const Complex &c)
{
	real+=c.real;
	imag+=c.imag;
	return *this;
}

//���������-
const Complex& Complex::operator-(const Complex &c)
{
	real-=c.real;
	imag-=c.imag;
	return *this;
}

//���������*
const Complex& Complex::operator*(const Complex &c)
{
	double newreal=real * c.real - imag * c.imag;
	double newimag=real * c.imag + imag * c.real;
	real=newreal;
	imag=newimag;
	return *this;
}

//���������/
const Complex& Complex::operator/(const Complex &c)
{
	double newreal=(real * c.real + imag * c.imag) / (c.real * c.real + c.imag * c.imag);
	double newimag=(imag * c.real - real * c.imag) / (c.real * c.real + c.imag * c.imag);
	real=newreal;
	imag=newimag;
	return *this;
}


//��������
Complex calc(char ope,Complex n1,Complex n2)
{
	switch(ope)
	{

		case '+':
		{
			return n1+n2;
			break;
		}
		case '-':
		{
			return n1-n2;
			break;
		}
		case '*' :
		{
			return n1*n2;
			break;
		}
		case '/' :
		{
			return n1/n2;
			break;
		}
		default:
		{
			break;
		}
	}
}

int main()
{
	char ope;
	cin>>ope;
	double real;
	double imag;
	cin>>real>>imag;
	Complex comp1(real,imag);
	cin>>real>>imag;
	Complex comp2(real,imag);
	//
	Complex comp3;
	comp3=calc(ope,comp1,comp2);
	//
	comp3.print();
	return 0;
}

