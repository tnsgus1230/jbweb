@echo off
title ����ũ����Ʈ 1.5.2 ���� ����������
:spawn
cls
echo.
echo.-------------------------------------------------------------
echo.
echo.     �� [����] ����ũ����Ʈ 1.5.2 ���� ������ ��
echo. 
echo.      1 . ����ũ����Ʈ 1.5.2 ���� ���� [ �ڹ� 32 ] 
echo. 
echo.      2 . ���� ������ ���� ����
echo. 
echo.      3 . ������ ��α� ���� [ ���� ��α� ]
echo. 
echo.      4 . ��Ŷ �����ϱ�
echo.
echo. 
echo.     �� ������ - ���� (Youwol) ��
echo.     �� ��Ŷ�� �� ��ġ�� �����ּ��� ��
echo.
echo.-------------------------------------------------------------


set /p a= �� �ڽ��� �ڹ� ������ �����Ͻñ� �ٶ��ϴ�. Enter :

if %a%==1 goto 326
if %a%==2 goto color
if %a%==3 goto blog
if %a%==4 goto exit

:326
cls
echo.
echo.-------------------------------------------------------------
echo.
echo.     �� [����] ����ũ����Ʈ 1.5.2 ���� ������ ��
echo.
echo.     �� ������ �������Դϴ�. [ �ƹ�Ű�� ������������! ] ��
echo.
echo.      * ���ǻ��� - ���� �������϶� �ƹ��ų� ������������!
echo.                  
echo.-------------------------------------------------------------

@echo off
java -Xms128M -Xmx1G -jar craftbukkit.jar
pause

:blog
cls
explorer "http://blog.naver.com/snm306"
goto spawn

:color
cls
echo.
echo.-------------------------------------------------------------
echo.
echo.     �� [����] ���� ������ ���� ���� ��
echo.
echo.     1 . ������            2 . �����
echo.
echo.     3 . �ϴû�            4 . ���
echo. 
echo.               5 . ���� �̵�
echo.               
echo.-------------------------------------------------------------

set /p colorsetting= �� �ڽ��� ���ϴ� ������ �����ϼ���. Enter :
if /i "%colorsetting%"=="1" color 0c
if /i "%colorsetting%"=="2" color 0e
if /i "%colorsetting%"=="3" color 09
if /i "%colorsetting%"=="4" color 0f
if /i "%colorsetting%"=="5" goto spawn

:error5
goto color

















