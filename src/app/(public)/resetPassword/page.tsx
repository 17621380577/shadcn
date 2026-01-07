'use client';

import Image from 'next/image';
import { useState,useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import api from '@/api';

export default function resetPassword(){
    const searchParams = useSearchParams();
    const email = searchParams.get('email') || '';
    const cookie = searchParams.get('cookie') || '';
    const exp = searchParams.get('exp') || '';
    const time = searchParams.get('time') ? parseInt(searchParams.get('time')!) : 0;
    const app = searchParams.get('app') || '';

    const [newPassword,setNewPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [showNewPassword,setShowNewPassword] = useState(false);
    const [showConfirmPassword,setShowConfirmPassword] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const passwordValidations = useMemo(()=>{
        return {
            hasLeastSixNumbers:newPassword.length>=6,
            hasUpperLowerCase:/[a-z]/.test(newPassword)&&/[A-Z]/.test(newPassword),
            hasNumber:/[0-9]/.test(newPassword),
        }
    },[newPassword]);

    const isPasswordMismatch = useMemo(()=>{
        return confirmPassword && newPassword !== confirmPassword;
    },[newPassword, confirmPassword]);

    const isPasswordMatch = useMemo(()=>{
        return confirmPassword && newPassword === confirmPassword;
    },[newPassword, confirmPassword]);

    const isPasswordSatisfied = useMemo(()=>{
        return passwordValidations.hasLeastSixNumbers 
                && passwordValidations.hasNumber 
                && passwordValidations.hasUpperLowerCase 
                && isPasswordMatch
    },[isPasswordMatch,passwordValidations])

    const handleSubmit = async () => {
        if (!isPasswordSatisfied) return;

        setLoading(true);
        setError(null);

        try {
            const result = await api.resetPassword.resetPassword({
                email: email,
                app: app,
                pwd: newPassword,
                time: time,
                cookie: cookie,
                exp: exp,
            });

            console.log('API Response:', result);

            if (result && result.sign === '1') {
                setSubmitted(true);
            } else {
                setError(result?.error || 'Failed to reset password');
            }
        } catch (err: any) {
            console.log('API Error:', err);
            setError(err?.message || 'Failed to reset password');
        } finally {
            setLoading(false);
        }
    };


    return <div className="flex flex-col pb-[412px] items-center gap-[100px] bg-[#F5F7FB] relative h-screen font-sans">
                <div className="flex pt-10 pr-7 pb-0 pl-7 self-start items-center w-full gap-3">
                    <Image
                        src = "assets/resetPassword/Flight Tracker_logo 1.svg"
                        width = {100}
                        height = {100}
                        alt = "Logo"
                        className='w-[46px] h-[46px]'
                    />
                    <span className='text-[20px] leading-[24px] font-semibold text-[#000000]'>Flight Tracker</span>
                </div>

            {/* 中心子容器 */}
            {!submitted && (
            <div className='flex flex-col w-[480px] justify-start'>
                {/* 标题容器 */}
                <div className='flex flex-col w-full pt-[30px] pb-[50px] items-center justify-center gap-1'>
                    <span className='text-[24px] leading-[30px] font-semibold text-[#000000]'>Reset Password</span>
                    <span className='text-[16px] leading-[20px] font-regular text-[#83878F] '>{email}</span>
                </div>
                {/* 第一个输入框容器 */}
                <div className='flex px-4 h-[52px] bg-[#FFFFFF] justify-between items-center gap-[10px] self-stretch rounded-[10px] border-[0.5px] border-[solid] border-[#B6B6B6]'>
                    <div className='flex items-center gap-2 h-6 w-[329px]'>
                        <Image
                            src="assets/resetPassword/signup_password.svg"
                            width = {100}
                            height = {100}
                            alt = "signup password"
                            className='w-[24px] h-[24px]'
                        />
                        <input
                            type = {showNewPassword ? "text" : "password"}
                            value = {newPassword}
                            onChange = {(e) => setNewPassword(e.target.value)}
                            placeholder='New password'
                            className={`text-[16px] ${showNewPassword ? 'tracking-normal' : 'tracking-[10px]'} placeholder:tracking-normal font-semibold flex-1 outline-none border-none bg-transparent placeholder:text-[#B6B6B6]`}
                        />
                    </div>
                    <div>
                        {newPassword && ( 
                            <div onClick={()=>setShowNewPassword(!showNewPassword)} className='cursor-pointer'>
                                <Image
                                    src={showNewPassword ? 'assets/resetPassword/signup_showcode.svg' : 'assets/resetPassword/signup_hidecode.svg'}
                                    alt = "signup code"
                                    width={100}
                                    height={100}
                                    className='w-6 h-6'
                                />
                            </div>
                        )}
                    </div>
                </div>
                <div className='flex pt-[10px] px-[16px] items-center gap-1 self-stretch'>
                        <Image
                            src={passwordValidations.hasLeastSixNumbers ? "assets/resetPassword/signup_pass.svg" : "assets/resetPassword/signup_precautions.svg"}
                            width={100}
                            height={100}
                            alt="signup precaution"
                            className='w-[14px] h-[14px]'
                        />
                        <span className={`text-[12px] leading-[14px] font-medium ${passwordValidations.hasLeastSixNumbers ? 'text-[#07CA00]':'text-[#83878F]'}`}>At least 6 characters</span>
                </div>
                <div className='flex pt-[10px] px-[16px] items-center gap-1 self-stretch'>
                        <Image
                            src={passwordValidations.hasUpperLowerCase ? "assets/resetPassword/signup_pass.svg" : "assets/resetPassword/signup_precautions.svg"}
                            width={100}
                            height={100}
                            alt="signup precaution"
                            className='w-[14px] h-[14px]'
                        />
                        <span className={`text-[12px] leading-[14px] font-medium ${passwordValidations.hasUpperLowerCase ? 'text-[#07CA00]' : 'text-[#83878F]'}`}>Upper & lowercase letters</span>
                </div>
                <div className='flex pt-[10px] px-[16px] items-center gap-1 self-stretch'>
                        <Image
                            src={passwordValidations.hasNumber ? "assets/resetPassword/signup_pass.svg" : "assets/resetPassword/signup_precautions.svg"}
                            width={100}
                            height={100}
                            alt="signup precaution"
                            className='w-[14px] h-[14px]'
                        />
                        <span className={`text-[12px] leading-[14px] font-medium ${passwordValidations.hasNumber ? 'text-[#07CA00]' : 'text-[#83878F]'}`}>At least 1 number</span>
                </div>
                <div className='flex flex-col pt-11 gap-[1px] self-stretch items-start'>
                    <div className='flex px-4 justify-between h-[52px] bg-[#FFFFFF] items-center gap-[10px] self-stretch rounded-[10px] border-[0.5px] border-[solid] border-[#B6B6B6]'>
                        <div className='flex items-center gap-2 h-6'>
                            <Image
                                src="assets/resetPassword/signup_password.svg"
                                width = {100}
                                height = {100}
                                alt = "signup password"
                                className='w-[24px] h-[24px]'
                            />
                            <input
                                type = {showConfirmPassword ? 'text' : 'password'}
                                value = {confirmPassword}
                                onChange = {(e) => setConfirmPassword(e.target.value)}
                                placeholder='Confirm Password'
                                className={`text-[16px] ${showConfirmPassword ? 'tracking-normal' : 'tracking-[10px]'} placeholder:tracking-normal font-semibold flex-1 outline-none border-none bg-transparent placeholder:text-[#B6B6B6]`}
                            />
                        </div>
                        <div>
                        {confirmPassword && (
                            <div onClick={()=>setShowConfirmPassword(!showConfirmPassword)} className='cursor-pointer'>
                                <Image
                                    src={showConfirmPassword ? 'assets/resetPassword/signup_showcode.svg' : 'assets/resetPassword/signup_hidecode.svg'}
                                    alt = "signup code"
                                    width={100}
                                    height={100}
                                    className='w-6 h-6'
                                />
                            </div>
                        )}
                    </div>
                    </div>
                </div>
                {isPasswordMismatch && (
                    <div className='flex pt-[10px] px-4 gap-1 self-stretch items-center'>
                        <span className='text-[#f8143d] text-center text-[12px] font-medium leading-[14px]'>Password don't match</span>
                    </div>
                )}
                {isPasswordMatch && (
                    <div className='flex pt-[10px] px-4 gap-1 self-stretch items-center'>
                         <Image
                            src= "assets/resetPassword/signup_pass.svg"
                            width={100}
                            height={100}
                            alt="signup precaution"
                            className='w-[14px] h-[14px]'
                        />
                        <span className='text-[#07CA00] text-center text-[12px] font-medium leading-[14px]'>Password match</span>
                    </div>

                )}
                {error && (
                    <div className='flex pt-[10px] px-4 gap-1 self-stretch items-center'>
                        <span className='text-[#f8143d] text-center text-[12px] font-medium leading-[14px]'>{error}</span>
                    </div>
                )}
                <div className={`flex flex-col ${isPasswordMismatch || isPasswordMatch || error ? 'pt-[22px]' : 'pt-[42px]'} items-start gap-[10px] self-stretch`}>
                    <button 
                        type="button" 
                        onClick={handleSubmit}
                        disabled={!isPasswordSatisfied || loading}
                        className={`flex h-[52px] p-[10px] justify-center items-center gap-[10px] self-stretch rounded-[10px] ${isPasswordSatisfied && !loading ? 'bg-[#FF8800] text-[#FFFFFF]' : 'bg-[#D9D9D9] text-[#5E626B] shadow-[0_4px_10px_0_#00000008]'} ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}>
                        <span className='text-4 leading-5 font-semibold'>{loading ? 'Processing...' : 'Continue'}</span>
                    </button>
                </div>
            </div>
            )}

            {/* 点击按钮后 */}
            {submitted && (
                <div className='flex flex-col gap-4 items-center justify-start absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[361px] h-[170px]'>
                    <div className='w-[140px] h-[140px]'>
                        <img
                            src="/assets/resetPassword/success.gif"
                            alt="Success"
                            className='w-full h-full'
                        />
                    </div>
                    <span className='flex justify-center flex-grow:1 flex-shrink:0 flex-basis:0 self-stretch text-6 leading-[30px] font-semibold'>
                        Password changed successfully
                    </span>
                    
                </div>

            )}

        


    </div>
}