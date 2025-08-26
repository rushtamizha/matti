import React from 'react'

const Disclaimer = () => {
  return (
    <div className='bg-gray-100'>
    <div className='py-4 px-6 mx-auto max-w-2xl bg-white'> 
        <h1 className='text-2xl text-center border-b-2 border-dashed p-2 font-semibold text-red-500 '> Disclaimer</h1>
        <p className='mt-4 text-gray-700'><b className='text-amber-500 font-medium '>This is an unofficial website</b>. We are not affiliated with, endorsed by by, or in any way officially connected to Big Mumbai. The official website for Big Mumbai should be sought through independent and official channels.</p>
        <p className='text-gray-700 mt-2'>The information provided on this website is for general informational purposes only. While we strive to keep the content accurate and current, we make no representations or warranties of any kind, either express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics found on this site. Any decisions you make based on this information are strictly at your own risk.</p>
        <ul className=' list-inside text-gray-700'>
            <li className='mt-4'><span className='text-gray-900 text-xl font-medium mt-4'>1. No Professional Advice</span>
                <p>The content on this website is not intended as professional advice. If you require specific advice, please consult a qualified professional. We do not accept any liability for any loss or damage arising from reliance on the information provided on this site.</p>
            </li>
            <li className='mt-4 font'><span className='text-gray-900 text-xl font-medium mt-4'>2. Third-Party Links</span>
                <p>Our website may contain links to external sites that are not provided or maintained by us [bigmumbaigames.app] . We have no control over the content and availability of those sites and do not endorse or make any representations about them. Accessing third-party websites is at your own risk.</p>
            </li>
            <li className='mt-4'>
                <span className='text-gray-900 text-xl font-medium mt-4'>3. Game Availability</span>
                <p>The availability of games and services mentioned on our website is subject to change. We do not guarantee that any game or feature will be available at all times or that it will remain unchanged. Please check our website regularly for updates.</p>
            </li>
            <li className='mt-4'><span className='text-gray-900 text-xl font-medium mt-4'>4. User-Generated Content</span>
                <p>Users may be able to submit or post content on our website. We do not endorse or guarantee the accuracy of any user-generated content. We reserve the right to monitor, remove, or edit any content that we deem inappropriate or in violation of our policies.</p>
            </li>
            <li className='mt-4'><span className='text-gray-900 text-xl font-medium mt-4'>5. Limitation of Liability</span>
                <p>To the fullest extent permitted by law, Big Mumbai Games shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the use of our website or the inability to use it. This includes, but is not limited to, damages for loss of profits, goodwill, data, or other intangible losses.</p>
            </li>
            <li className='mt-4'><span className='text-gray-900 text-xl font-medium mt-4'>6. Changes to This Disclaimer</span>
                <p>We may update this Disclaimer from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this Disclaimer periodically for any changes.</p>
            </li>
            <li className='mt-4'><span className='text-gray-900 text-xl font-medium mt-4'>7. Contact Us</span>
                <p>If you have any questions about this Disclaimer or our practices, please contact us at: Big Mumbai Games 
By using our website, you acknowledge that you have read this Disclaimer and agree to its terms. Thank you for visiting Big Mumbai Games!
</p>
            </li>
        </ul>
    </div>
    </div>
  )
}

export default Disclaimer