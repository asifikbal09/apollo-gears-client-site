import { Input } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';

const RegisterForm = () => {
    return (
        
            <div>
      <form>
        <Input name="email" type="email" label="Email" variant="bordered" />
        <Input className="mt-3" name="email" type="email" label="Email" variant="bordered" />
        <Input className="mt-3" name="email" type="email" label="Email" variant="bordered" />
        <Input
          className="mt-3"
          name="password"
          type="password"
          label="Password"
          variant="bordered"
        />
        <div className="flex justify-end text-primary">
          <Link href="/login">Already have account.</Link>
        </div>
        <div className="flex justify-end ">{/* <ActionSubmitButton /> */}</div>
      </form>
    </div>
    );
};

export default RegisterForm;