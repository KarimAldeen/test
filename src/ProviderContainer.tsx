import QueryProvider from './lib/ReactQueryProvider'
import { BrowserRouter } from 'react-router-dom'
import ReduxT from './lib/ReduxT'
import { Tchildren } from './types/App'
import useResponsive from './Hooks/useResponsive';
import ToastProvider from './lib/ToastProvider';
import { ConfigProvider } from 'antd';
import { getColor } from './Hooks/useColor';

function ProviderContainer({ children }: Tchildren) {

    const primaryColor = getColor("primary")
    const bgColor = getColor("bg")

    return (
        <BrowserRouter basename='/'>
            {/* <ReduxT> */}
            <QueryProvider>
                <ToastProvider>
                    <ConfigProvider
                        theme={{
                            token: {
                                colorPrimary:primaryColor,
                            },
                            components: {
                                Table: {
                                    headerBg:bgColor,
                                    headerColor:primaryColor
                                    
                                },
                              },
                        }}
                    >
                        {children}
                    </ConfigProvider>

                </ToastProvider>
            </QueryProvider>
            {/* </ReduxT> */}
        </BrowserRouter>
    )
}

export default ProviderContainer