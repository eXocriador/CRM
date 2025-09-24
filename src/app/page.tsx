'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Button from '@/app/components/button';

export default function Home() {
  const router = useRouter();

  const handleDashboardClick = () => {
    router.push('/dashboard');
  };

  const handleCompaniesClick = () => {
    router.push('/companies');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Image
                className="mr-4"
                width={122}
                height={25}
                src="/icons/logo.svg"
                alt="logo"
              />
            </div>
            <div className="flex items-center gap-3">
              <Image
                width={44}
                height={44}
                src="/images/avatar.png"
                alt="avatar"
              />
              <div>
                <p className="text-base font-semibold text-gray-900">
                  Adam Smith
                </p>
                <p className="text-sm font-light text-gray-500">
                  adamsmith@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Company Management Platform
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Efficiently manage companies, promotions, and track your business
            performance with our comprehensive dashboard and analytics tools.
          </p>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Platform Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Analytics Card */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="bg-gray-900 p-4 rounded-lg inline-flex mb-4">
                  <Image
                    width={32}
                    height={32}
                    src="/icons/squares.svg"
                    alt="analytics icon"
                  />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  Analytics
                </h3>
                <p className="text-gray-600">
                  Comprehensive business analytics and performance tracking
                </p>
              </div>
            </div>

            {/* Company Management Card */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="bg-gray-900 p-4 rounded-lg inline-flex mb-4">
                  <Image
                    width={32}
                    height={32}
                    src="/icons/briefcase.svg"
                    alt="management icon"
                  />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  Company Management
                </h3>
                <p className="text-gray-600">
                  Efficiently manage and organize your company portfolio
                </p>
              </div>
            </div>

            {/* Promotions Card */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="bg-gray-900 p-4 rounded-lg inline-flex mb-4">
                  <Image
                    width={32}
                    height={32}
                    src="/icons/check.svg"
                    alt="promotions icon"
                    className="brightness-0 invert"
                  />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  Promotions
                </h3>
                <p className="text-gray-600">
                  Create and manage promotional campaigns effectively
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Dashboard Card */}
          <div className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow">
            <div className="text-center mb-6">
              <div className="bg-gray-900 p-4 rounded-lg inline-flex mb-4">
                <Image
                  width={32}
                  height={32}
                  src="/icons/squares.svg"
                  alt="dashboard icon"
                />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                Dashboard
              </h2>
            </div>
            <p className="text-gray-600 mb-6 text-center">
              View comprehensive analytics, statistics, and performance metrics
              for your business operations.
            </p>
            <div className="flex justify-center">
              <Button
                onClick={handleDashboardClick}
                className="w-full max-w-xs"
              >
                Open Dashboard
              </Button>
            </div>
          </div>

          {/* Companies Card */}
          <div className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow">
            <div className="text-center mb-6">
              <div className="bg-gray-900 p-4 rounded-lg inline-flex mb-4">
                <Image
                  width={32}
                  height={32}
                  src="/icons/briefcase.svg"
                  alt="companies icon"
                />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                Companies
              </h2>
            </div>
            <p className="text-gray-600 mb-6 text-center">
              Manage your company portfolio, view details, and track their
              performance and promotions.
            </p>
            <div className="flex justify-center">
              <Button
                onClick={handleCompaniesClick}
                className="w-full max-w-xs"
              >
                Manage Companies
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
