import React, { useEffect } from 'react';
import useApi from '../../hooks/useApi';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const WithFormHandling = (WrappedComponent, apiEndpoint, redirectPath) => {
    const FormHandler = (props) => {
        const {
            register,
            handleSubmit,
            reset,
            formState: { errors, isValid, isSubmitting },
            watch,
        } = useForm({ mode: "onChange" });

        const navigate = useNavigate();
        const watchFields = watch();
        const { data: submitResponse, errorMsg: submittingErr, postData: submitForm } = useApi();

        const onSubmit = (data) => {
            submitForm(apiEndpoint, data);
        };

        useEffect(() => {
            if (submitResponse?.status === 200) {
                reset();
                if (redirectPath) {
                    navigate(redirectPath);
                }
            }
        }, [submitResponse, reset]);

        return (
            <WrappedComponent
                {...props}
                register={register}
                handleSubmit={handleSubmit}
                errors={errors}
                isValid={isValid}
                isSubmitting={isSubmitting}
                watchFields={watchFields}
                onSubmit={onSubmit}
            />
        );
    };

    return FormHandler;
};

export default WithFormHandling;