import React from 'react';
import { motion } from 'framer-motion';
import { HeadSection, Layout, ProductNotFound } from '../../components';
const index = () => {
  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      <HeadSection
        title={'Indusrty-details | ATC Chains India'}
        description={'description'}
        keyWords={'Keywords'}
      />
      <Layout>
        <ProductNotFound />
      </Layout>
    </motion.div>
  );
};

export default index;
