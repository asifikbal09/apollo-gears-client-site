import { Card, CardBody, CardHeader } from '@nextui-org/react';
import { Cog } from 'lucide-react';
import React from 'react';
import RegisterForm from './RegisterForm';

const RegisterPage = () => {
    return (
        <div className="mt-24 flex justify-center items-center">
        <Card className="w-96">
          <CardHeader className="flex justify-center">
            <div className="flex">
              <Cog />
              <p className="font-bold text-inherit px-4">Register</p>
            </div>
          </CardHeader>
          <CardBody>
           <RegisterForm/>
          </CardBody>
        </Card>
      </div>
    );
};

export default RegisterPage;